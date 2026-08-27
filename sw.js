const CACHE='chengdu-trip-cache-20260827-places-guide-1';
const FOOD_CACHE='chengdu-food-photos';
const ASSETS=[
  "./",
  "./index.html",
  "./styles.css?build=20260827-places-guide-1",
  "./app.js?build=20260827-places-guide-1",
  "./manifest.webmanifest",
  "./IMAGE_CREDITS.html",
  "./assets/photos/chunxi.jpg",
  "./assets/photos/dujiangyan_1.jpg",
  "./assets/photos/dujiangyan_2.jpg",
  "./assets/photos/emei_1.jpg",
  "./assets/photos/emei_2.jpg",
  "./assets/photos/huanglong_1.jpg",
  "./assets/photos/huanglong_2.jpg",
  "./assets/photos/huanglong_3.jpg",
  "./assets/photos/huanglong_4.jpg",
  "./assets/photos/jinli.jpg",
  "./assets/photos/jinli_2.jpg",
  "./assets/photos/jiuzhaigou_1.jpg",
  "./assets/photos/jiuzhaigou_2.jpg",
  "./assets/photos/jiuzhaigou_3.jpg",
  "./assets/photos/jiuzhaigou_4.jpg",
  "./assets/photos/kuanzhai.jpg",
  "./assets/photos/kuanzhai_2.jpg",
  "./assets/photos/leshan_1.jpg",
  "./assets/photos/leshan_2.jpg",
  "./assets/photos/leshan_3.jpg",
  "./assets/photos/panda_1.jpg",
  "./assets/photos/panda_2.jpg",
  "./assets/photos/panda_3.jpg",
  "./assets/photos/panda_entrance.jpg",
  "./assets/photos/peoples_park.jpg",
  "./assets/photos/peoples_park_2.jpg",
  "./assets/photos/sanxingdui_1.jpg",
  "./assets/photos/sanxingdui_2.jpg",
  "./assets/photos/sanxingdui_3.jpg",
  "./assets/photos/sanxingdui_4.jpg",
  "./assets/photos/songpan_1.jpg",
  "./assets/photos/songpan_2.jpg",
  "./assets/photos/taikoo.jpg"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => ![CACHE, FOOD_CACHE].includes(key)).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const targetCache = new URL(event.request.url).origin === self.location.origin ? CACHE : FOOD_CACHE;
        if (response.ok || response.type === 'opaque') {
          const copy=response.clone();
          caches.open(targetCache).then(cache=>cache.put(event.request,copy));
        }
        return response;
      });
    })
  );
});
