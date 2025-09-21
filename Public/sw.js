// Simple offline-first service worker with share-target redirect
const CACHE = "onefolder-cache-v1";
const SHELL = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// Handle POST from Web Share Target by redirecting to query params
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (url.pathname === "/share-target" && event.request.method === "POST"){
    event.respondWith((async () => {
      const formData = await event.request.formData();
      const title = formData.get("title") || "";
      const text = formData.get("text") || "";
      const u = new URL("/", self.location.origin);
      if (title) u.searchParams.set("title", title);
      if (text) u.searchParams.set("text", text);
      return Response.redirect(u.toString(), 303);
    })());
    return;
  }

  // Offline-first: try cache, then network, then cache fallback
  event.respondWith((async () => {
    const cached = await caches.match(event.request, {ignoreSearch:true});
    if (cached) return cached;
    try {
      const res = await fetch(event.request);
      return res;
    } catch {
      // fallback to index for navigation requests
      if (event.request.mode === "navigate"){
        return caches.match("/index.html");
      }
      return new Response("Offline", {status:503, statusText:"Offline"});
    }
  })());
});
