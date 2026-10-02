const CACHE='surf-heat-v14';
const FILES=['./','./index.html','./manifest.webmanifest',
'20min','15min','10min','5min','3min','2min','1min','30sec','20sec','countdown','10','9','8','7','6','5','4','3','2','1'].map((x,i)=>i<3?x:'./audio/'+x+'.wav');
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
