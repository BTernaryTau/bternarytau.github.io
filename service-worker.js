// Update the service worker every time Jekyll processes the site
const version = '20200222160802';

var CACHE_NAME = 'technically-exists-cache-v' + version;
var urlsToCache = [
	'/assets/css/hide-footnotes.css',
	'/assets/css/max-499px.css',
	'/assets/css/min-500px.css',
	
	
		'/miscellaneous/voting-theory/bar-voting',
	
		'/miscellaneous/voting-theory/bogobogosort-voting',
	
		'/miscellaneous/voting-theory/consensus-plurality-voting',
	
		'/miscellaneous/voting-theory/favorite-betrayal-under-star',
	
		'/about/',
	
		'/miscellaneous/voting-theory/',
	
		'/miscellaneous/',
	
		'/archive/',
	
		'/',
	
		'/miscellaneous/voting-theory/raws-voting',
	
		'/miscellaneous/superintelligence-reference-page',
	
		'/miscellaneous/voting-theory/superintelligence-voting',
	
		'/page2/',
	
		'/page3/',
	
		'/page4/',
	
	
	
		'/2020/02/16/the-meaning-of-one-person-one-vote',
	
		'/2019/04/01/on-normative-ethical-theories',
	
		'/2018/12/31/the-worlds-problems',
	
		'/2018/11/26/ranked-choice-voting-is-worth-supporting',
	
		'/2018/10/14/star-voting-in-an-interstate-compact',
	
	
	
		
	
		
			'/android-chrome-192x192.png',
		
	
		
			'/android-chrome-512x512.png',
		
	
		
			'/apple-touch-icon.png',
		
	
		
			'/assets/OPOV.png',
		
	
		
			'/browserconfig.xml',
		
	
		
			'/favicon-16x16.png',
		
	
		
			'/favicon-32x32.png',
		
	
		
			'/favicon.ico',
		
	
		
	
		
			'/mstile-150x150.png',
		
	
		
			'/safari-pinned-tab.svg',
		
	
		
	
		
	
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