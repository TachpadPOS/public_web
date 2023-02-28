'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "074b096ac140eb088028f0d0b888e810",
"index.html": "c786e096a9c3039b03b556fe4a5921d2",
"/": "c786e096a9c3039b03b556fe4a5921d2",
"main.dart.js": "043ba8a45091ebb0a6fa26d5ed377d90",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc05275add6b0348d06a2ec23fe1b10f",
"assets/AssetManifest.json": "bcf83d90d57d01c42e87fb687acfe3eb",
"assets/NOTICES": "10f7e7d8ec3b9eaee615d4be7ac31db8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/coffee.png": "635f524b48583e7a6104f049b01e40ef",
"assets/assets/images/coca_cola.jpg": "14afef54a9733255c1ce21d49775184d",
"assets/assets/images/mexican.jpg": "631a1900316304e96c7db0fc5f5bc1f4",
"assets/assets/images/cold_drinks.jpg": "bfe2380d3f3c9b8e5b2bed571835b177",
"assets/assets/images/margarita.png": "222e1ff6e25e5f060f005aee0614250d",
"assets/assets/images/hot_drinks.jpg": "c2866e31311b3f53c076bd31f2e09bf4",
"assets/assets/images/coca_cola.jpeg": "98974984c8bb2ee967a9edb42329ea46",
"assets/assets/images/pizza.png": "a64176771be1aac1541804e23d0cf3dc",
"assets/assets/images/kebab.jpg": "2dd93530a529703f2a4aae01b8f861a7",
"assets/assets/images/tee.png": "cc3b7ada8facaf838d2b771e272d8faf",
"assets/assets/images/logo.svg": "a0b568bf9c8084cc3d60dcd6019e8871",
"assets/assets/images/drinks.png": "d1b258105118adfcbb5fa670746084fd",
"assets/assets/icons/ic_clock.svg": "b4e1660cc82540901cc0a2b1703052c1",
"assets/assets/icons/ic_time.svg": "4e055accf3a8a78890398677db468ea4",
"assets/assets/icons/ic_profile.svg": "40fc294d7e1e3b57bc5ceedb79445c5a",
"assets/assets/icons/ic_delete.svg": "42ad0f07ea2fd6c002d7d638cf7f9b3a",
"assets/assets/icons/ic_card.svg": "1dcfce8384778eab264ed7deb78beb68",
"assets/assets/icons/ic_print2.svg": "99767d4cc0e7800f12555f06a73095d8",
"assets/assets/icons/ic_short_clean.svg": "a29afe91d375ac859b5880f10d258ed4",
"assets/assets/icons/ic_plus.svg": "61bbe644dc3e51b6a9dbacb86c3ab928",
"assets/assets/icons/ic_users.svg": "22245a9f5eb89031804cbc877ee77f17",
"assets/assets/icons/ic_card2.svg": "77282d6838372e30d8270d51503fd36c",
"assets/assets/icons/ic_minus.svg": "1438254f0585bb5f5fef4f814435f6b1",
"assets/assets/icons/ic_stats.svg": "8c066b658d57062f40ea886a10c4b949",
"assets/assets/icons/ic_print.svg": "54930352175d2e221259ea0d0a51b184",
"assets/assets/icons/ic_camera.svg": "9eb201e0a1c91130072e39ad4b3d10ce",
"assets/assets/icons/ic_close.svg": "46f3d7e1432c5227927c83a8a0f38fcb",
"assets/assets/icons/ic_chek.svg": "ded4362b2f169bfa019063c9356dd4c7",
"assets/assets/icons/ic_check.svg": "10aba0bb12353a49d9f4f048c93408e8",
"assets/assets/icons/ic_discount.svg": "a07f5647c64a2e880544472b07b6f4b6",
"assets/assets/icons/ic_bonus.svg": "e3adace938d5d4e0e5a22f2d5f925d78",
"assets/assets/icons/ic_settings.svg": "66de6f5b9fd7aecf7d95a3e3c67339a5",
"assets/assets/icons/ic_search.svg": "324184f4d66d4ef24a7d764ad2404fda",
"assets/assets/icons/ic_cash.svg": "9fef48909e4c8c11dfd6fe97be37bacc",
"assets/assets/icons/ic_logout.svg": "f44a8636b1cfe9c650fa5096e55f83f1",
"assets/assets/icons/ic_more.svg": "f301a199eb4afe3ac0dbf35f9f29b04e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
