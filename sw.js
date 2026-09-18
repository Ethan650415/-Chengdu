const SCOPE_PATH = new URL(self.registration.scope).pathname;
const CACHE_PREFIX = 'chengdu-guide-' + encodeURIComponent(SCOPE_PATH) + '-';
const CACHE = CACHE_PREFIX + 'e918route2';
const FOOD_CACHE = 'chengdu-food-photos';
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?rev=e918route2",
  "./app.js?rev=e918route2",
  "./ATTRACTIONS.html",
  "./IMAGE_CREDITS.html",
  "./manifest.webmanifest",
  "./assets/maps/route-map-clear.png",
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
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    // Leave external services untouched; keep previously saved food photographs usable.
    if (request.destination === 'image' && /(^|\.)wikimedia\.org$/.test(url.hostname)) {
      event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
    }
    return;
  }
  if (!url.pathname.startsWith(SCOPE_PATH)) return;
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 4000);
      try {
        const response = await fetch(request, {signal: controller.signal});
        if (!response.ok) throw new Error('Navigation unavailable');
        await cache.put(request, response.clone());
        return response;
      } catch {
        const cached = await cache.match(request, {ignoreSearch:true});
        if (cached) return cached;
        if (url.pathname === SCOPE_PATH || url.pathname === SCOPE_PATH + 'index.html') {
          const home = await cache.match(new URL('./index.html',self.registration.scope).href);
          if (home) return home;
        }
        return new Response('此頁尚未儲存，連線後再開啟。', {status:503, headers:{'Content-Type':'text/plain; charset=UTF-8'}});
      } finally { clearTimeout(timer); }
    })());
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  })());
});
