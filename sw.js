const cacheVersion = 'v3';
const cacheName = 'sounds-' + cacheVersion;

var urlsToCache = [
  "/",
  "sounds/daddy.m4a",
  "sounds/adada.m4a",
  "sounds/happy.m4a",
  "sounds/all done.m4a",
  "sounds/cocotte.m4a",
  "sounds/écureuil.m4a",
  "sounds/tortue.m4a",
  "sounds/encore.m4a",
  "sounds/iaiao.m4a",
  "sounds/maman.m4a",
  "sounds/mamie.m4a",
  "sounds/mathis.m4a",
  "sounds/non.m4a",
  "sounds/papi.m4a",
  "sounds/papillon.m4a",
  "sounds/poissons.m4a",
  "sounds/rires.m4a",
  "sounds/vache.m4a",
  "sounds/voiture.m4a",
  "sounds/wawawa.m4a",
  "sounds/wow.m4a",
  "sounds/yeah.m4a",
  "sounds/banana.m4a",
  "sounds/caca.m4a",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Caching sounds');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});