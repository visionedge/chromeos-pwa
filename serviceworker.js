self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // Perform install steps
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
  // Perform activate steps
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  // Cache strategies can be implemented here
});
