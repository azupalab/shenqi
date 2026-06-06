const CACHE_NAME = "shenqi-v22";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./src/supabase-config.js",
  "./src/app.js",
  "./src/styles.css",
  "./src/questions-data.js",
  "./src/extra-questions-data.js",
  "./src/lessons-data.js",
  "./src/extra-lessons-data.js",
  "./public/assets/logo-shenqi.png",
  "./public/assets/logo1-shenqi.png",
  "./public/assets/resumenes/como-elegir-puntos.png",
  "./public/assets/resumenes/resumen-puntos-importantes.jpeg",
  "./public/assets/resumenes/vasos-maravillosos.jpeg",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
