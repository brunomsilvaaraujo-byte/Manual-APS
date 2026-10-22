/* Manual APS — Lote 91 — Endocrinologia e metabolismo; preservar banco e PWA. */
const CACHE='manual-aps-lote91-endocrino-metabolismo-v1';
const FILES=['./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await Promise.allSettled(FILES.map(path=>cache.add(path)));await self.skipWaiting()})())});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(n=>n.startsWith('manual-aps-')&&n!==CACHE).map(n=>caches.delete(n)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const u=new URL(event.request.url);if(u.origin!==self.location.origin||!u.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
  if(event.request.mode==='navigate'){event.respondWith((async()=>{try{const r=await fetch(event.request);if(r.ok){const c=await caches.open(CACHE);c.put(event.request,r.clone()).catch(()=>{})}return r}catch(e){return await caches.match(event.request)||await caches.match('./index.html')||Response.error()}})());return}
  event.respondWith(caches.match(event.request).then(c=>c||fetch(event.request)));
});
