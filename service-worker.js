---
layout: null
---


// Update the service worker every time Jekyll processes the site
const version = '{{site.time | date: '%Y%m%d%H%M%S'}}';

var CACHE_NAME = 'technically-exists-cache-v' + version;
var urlsToCache = [
	'/assets/css/max-499px.css',
	'/assets/css/min-500px.css',
	
	{% for page in site.html_pages %}
		'{{ page.url }}',
	{% endfor %}

	{% for post in site.posts limit:5 %}
		'{{ post.url }}',
	{% endfor %}
	
	{% for file in site.static_files %}
		{% if file.extname == '.ico' or file.extname == '.png' or file.extname == '.svg' or file.extname == '.xml' %}
			'{{ file.path }}',
		{% endif %}
	{% endfor %}
];

self.addEventListener('install', function(event) {
	self.skipWaiting();
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log('The service worker is serving the asset.');
	event.respondWith(fromNetwork(event.request, 400).catch(function () {
		return fromCache(event.request);
	}));
});

function fromNetwork(request, timeout) {
	return new Promise(function(fulfill, reject) {
		var timeoutId = setTimeout(reject, timeout);
		fetch(request).then(function(response) {
			clearTimeout(timeoutId);
			fulfill(response);
		}, reject);
	});
}

function fromCache(request) {
	return caches.open(CACHE_NAME).then(function(cache) {
		return cache.match(request).then(function(matching) {
			return matching || Promise.reject('no-match');
		});
	});
}