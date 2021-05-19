// Update the service worker every time Jekyll processes the site
const version = '20210519015216';

var CACHE_NAME = 'technically-exists-cache-v' + version;
var urlsToCache = [
	'/assets/css/hide-footnotes.css',
	'/assets/css/max-499px.css',
	'/assets/css/min-500px.css',
	
	
		'/miscellaneous/voting-theory/anonymity-criterion',
	
		'/miscellaneous/voting-theory/bar-voting',
	
		'/miscellaneous/voting-theory/bogobogosort-voting',
	
		'/miscellaneous/voting-theory/cancellation-criterion',
	
		'/miscellaneous/voting-theory/candidate-balancing-algorithm',
	
		'/miscellaneous/voting-theory/consensus-plurality-voting',
	
		'/miscellaneous/voting-theory/favorite-betrayal-under-star',
	
		'/miscellaneous/voting-theory/identical-input-options-criterion',
	
		'/about/',
	
		'/miscellaneous/simdemocracy/tau-analytical-union/',
	
		'/miscellaneous/simdemocracy/',
	
		'/miscellaneous/voting-theory/',
	
		'/miscellaneous/',
	
		'/archive/',
	
		'/',
	
		'/miscellaneous/voting-theory/list-of-voting-method-simulations',
	
		'/miscellaneous/voting-theory/raws-voting',
	
		'/miscellaneous/voting-theory/sequential-proportional-score-voting',
	
		'/miscellaneous/superintelligence-reference-page',
	
		'/miscellaneous/voting-theory/superintelligence-voting',
	
		'/miscellaneous/voting-theory/types-of-one-person-one-vote',
	
		'/page2/',
	
		'/page3/',
	
		'/page4/',
	
		'/page5/',
	
		'/page6/',
	
		'/page7/',
	
	
	
		'/2021/04/25/why-i-like-star-voting-simplicity-and-familiarity',
	
		'/2021/04/01/combining-anarcho-primitivism-and-transhumanism',
	
		'/2021/03/07/on-dealbreaker-voting-criteria',
	
		'/2021/01/24/social-choice-theory-paradigms',
	
		'/2020/10/27/the-motivation-behind-spsv-part-5',
	
	
	
		
	
		
			'/android-chrome-192x192.png',
		
	
		
			'/android-chrome-512x512.png',
		
	
		
			'/apple-touch-icon.png',
		
	
		
			'/assets/0-electorate.png',
		
	
		
			'/assets/1-dhondt.png',
		
	
		
			'/assets/2-rrv.png',
		
	
		
			'/assets/3-spsv.png',
		
	
		
			'/assets/4-rrv-ten-seats.png',
		
	
		
			'/assets/5-spsv-ten-seats.png',
		
	
		
			'/assets/Kotze-Pereira-transformation.png',
		
	
		
			'/assets/OPOV.png',
		
	
		
			'/assets/logo.png',
		
	
		
			'/assets/quadratic-voting-cost.png',
		
	
		
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