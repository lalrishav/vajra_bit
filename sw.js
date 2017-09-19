var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'team.css',
  'minifiedcss/mainmin.css',
  'minifiedcss/aboutmin.css',
  'minifiedcss/eventsmin.css',
   'minifiedcss/registermin.css',
    'minifiedcss/contactmin.css',
    'https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet',
    'backuppngs',
    'photos',
    'vajranew.png',
    'White_logo.png',
    'wow.js',
    'app.js',
    'bitlogoWebp.webp',
    'abt_pht',
    'abt_res',
    'cont_res'
    
    
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});