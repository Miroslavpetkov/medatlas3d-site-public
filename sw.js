/*
 * MedAtlas 3D service worker: makes the app installable and lets it open without internet.
 * Nothing is precached beyond the page itself: everything the app fetches is kept as it is used,
 * so after one visit the parts a student has opened work offline.
 *
 *  - the page (navigations): network first, so a new deploy shows as soon as there is internet;
 *    the cached page when offline or after 4 s with no answer.
 *  - /assets/ (code, styles, fonts: names change with every build): cache first, kept for ever,
 *    oldest dropped beyond 150 files.
 *  - everything else (3D models, pictures, data): cached copy at once, refreshed in the background.
 * Bump VERSION to drop every cache on the next visit.
 */
const VERSION = 'v1';
const PAGE = `medatlas-page-${VERSION}`;
const CODE = `medatlas-code-${VERSION}`;
const DATA = `medatlas-data-${VERSION}`;
const KEEP = [PAGE, CODE, DATA];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(PAGE).then((c) => c.addAll(['./', './manifest.webmanifest'])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('medatlas-') && !KEEP.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

async function trim(cache, max) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}

async function page(req) {
  const cache = await caches.open(PAGE);
  try {
    const res = await Promise.race([fetch(req), new Promise((_, no) => setTimeout(() => no(new Error('slow')), 4000))]);
    if (res.ok) cache.put('./', res.clone());
    return res;
  } catch {
    return (await cache.match('./')) || (await cache.match(req)) || Response.error();
  }
}

async function code(req) {
  const cache = await caches.open(CODE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) {
    await cache.put(req, res.clone());
    trim(cache, 150);
  }
  return res;
}

async function data(req, e) {
  const cache = await caches.open(DATA);
  const hit = await cache.match(req);
  const fresh = fetch(req)
    .then((res) => {
      if (res.ok && res.status === 200) cache.put(req, res.clone());
      return res;
    })
    .catch(() => hit || Response.error());
  if (hit) {
    e.waitUntil(fresh);
    return hit;
  }
  return fresh;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope);
  if (!url.pathname.startsWith(scope.pathname)) return;
  // The landing page and the service worker itself stay plain network.
  const rel = url.pathname.slice(scope.pathname.length);
  if (rel.startsWith('landing') || rel === 'sw.js') return;
  if (req.mode === 'navigate') {
    // Only the app's own page is kept (the address after # does not reach here).
    if (rel === '' || rel === 'index.html') e.respondWith(page(req));
    return;
  }
  if (rel.startsWith('assets/')) return e.respondWith(code(req));
  e.respondWith(data(req, e));
});

/*
 * On the first visit the page loads its main code before this worker exists, so it never
 * passes through it. The page then sends the list of what it already loaded (src/pwa.ts);
 * keep those too, or the app would not start offline.
 */
self.addEventListener('message', (e) => {
  if (!e.data || e.data.type !== 'cache' || !Array.isArray(e.data.urls)) return;
  const scope = new URL(self.registration.scope);
  e.waitUntil(
    Promise.all(
      e.data.urls.map(async (u) => {
        const url = new URL(u, scope);
        if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
        const rel = url.pathname.slice(scope.pathname.length);
        if (rel.startsWith('landing') || rel === 'sw.js' || rel === '' || rel === 'index.html') return;
        const cache = await caches.open(rel.startsWith('assets/') ? CODE : DATA);
        if (await cache.match(url.href)) return;
        try {
          await cache.add(url.href);
        } catch {
          /* gone or offline: it will be cached the next time it is used */
        }
      }),
    ),
  );
});
