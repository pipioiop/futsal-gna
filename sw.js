const CACHE_NAME = 'futsal-stats-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './logo.png',
    './alert.mp3',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://unpkg.com/xlsx/dist/xlsx.full.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
