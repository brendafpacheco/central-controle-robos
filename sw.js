const CACHE_NAME = 'central-controle-robos-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/',
                'index.html',
                'album.html',
                'cadastro.html',
                'controlar_braco.html',
                'comtrolar_carro.html',
                'controlar_drone.html',
                'controlar.html',
                'login.html',
                'sobre.html',
                'manifest.json',
                'css/',
                'img/',
                'js/'
            ])
        })
    )
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});