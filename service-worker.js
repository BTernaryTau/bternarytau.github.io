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

	{% for post in site.posts %}
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

self.addEventListener('activate', function(event) {
	console.log('Activating new service worker...');

	var cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				// Cache hit - return response
				if (response) {
					return response;
				}

				// IMPORTANT: Clone the request. A request is a stream and
				// can only be consumed once. Since we are consuming this
				// once by cache and once by the browser for fetch, we need
				// to clone the response.
				var fetchRequest = event.request.clone();

				return fetch(fetchRequest).then(
					function(response) {
						// Check if we received a valid response
						if(!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}

						// IMPORTANT: Clone the response. A response is a stream
						// and because we want the browser to consume the response
						// as well as the cache consuming the response, we need
						// to clone it so we have two streams.
						var responseToCache = response.clone();

						caches.open(CACHE_NAME)
							.then(function(cache) {
								cache.put(event.request, responseToCache);
							});

					return response;
				}
			);
		})
	);
});