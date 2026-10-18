// Service worker do Manual APS — cache simples para uso offline.
// Ao publicar uma nova versão do index.html, altere CACHE_VERSION
// para que os celulares/computadores baixem a versão atualizada.
const CACHE_VERSION = 'manual-aps-v183-20261018';
const ARQUIVOS = ['./', './index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ARQUIVOS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(
        chaves.filter((c) => c !== CACHE_VERSION).map((c) => caches.delete(c))
      )
    )
  );
  self.clients.claim();
});

// Rede primeiro (traz sempre a versão mais nova quando há internet);
// se estiver offline, usa a cópia guardada.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((resposta) => {
        const copia = resposta.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copia));
        return resposta;
      })
      .catch(() => caches.match(event.request).then((r) => r || caches.match('./index.html')))
  );
});
