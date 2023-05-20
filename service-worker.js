importScripts("/precache-manifest.a4a8a0c64a2c1b0a66e2126121b1e93e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', () => {
    self.registration.unregister();
    self.clients.matchAll({
        type: 'window'
    }).then(clients => {
        for (const client of clients) {
            client.navigate(client.url);
        }
    });
});