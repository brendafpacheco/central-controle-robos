const CACHE_NAME = 'central-controle-robos-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/central-controle-robos/',
                '/central-controle-robos/index.html',
                '/central-controle-robos/album.html',
                '/central-controle-robos/cadastro.html',
                '/central-controle-robos/controlar_braco.html',
                '/central-controle-robos/controlar_carro.html',
                '/central-controle-robos/controlar_drone.html',
                '/central-controle-robos/controlar.html',
                '/central-controle-robos/login.html',
                '/central-controle-robos/sobre.html',
                '/central-controle-robos/manifest.json',
                '/central-controle-robos/css/style.css',
                '/central-controle-robos/img/car.jpg',
                '/central-controle-robos/img/drone.jpg',
                '/central-controle-robos/img/menu.png',
                '/central-controle-robos/img/robot_arm.jpg',
                '/central-controle-robos/img/robot.png',
                '/central-controle-robos/img/user.png',
                '/central-controle-robos/img/album/placeholder.png',
                '/central-controle-robos/all.min.js'
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