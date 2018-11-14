// Update the service worker every time Jekyll processes the site
const version = '20181114221352';

var CACHE_NAME = 'technically-exists-cache-v' + version;
var urlsToCache = [
	'/assets/css/max-499px.css',
	'/assets/css/min-500px.css',
	
	
		'/about/',
	
		'/archive/',
	
		'/miscellaneous/',
	
		'/',
	
		'/miscellaneous/superintelligence-reference-page',
	
		'/page2/',
	
		'/page3/',
	
		'/page4/',
	

	
		'/2018/10/14/star-voting-in-an-interstate-compact',
	
		'/2018/07/21/should-you-pursue-common-or-rare-achievements',
	
		'/2018/07/01/why-discuss-superintelligence',
	
		'/2018/06/04/my-thoughts-on-microsoft-acquiring-github',
	
		'/2018/06/01/outlining-the-opposite-of-a-singleton',
	
	
	
		
	
		
			'/android-chrome-192x192.png',
		
	
		
			'/android-chrome-512x512.png',
		
	
		
			'/apple-touch-icon.png',
		
	
		
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