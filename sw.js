(function(){"use strict"
function e(e,t){return caches.keys().then(function(n){n.forEach(function(n){var c=0===n.indexOf(e),a=n!==t
c&&a&&caches.delete(n)})})}function t(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()})
var n=["2017-System-Map-0ea832b1b12a7a6f48aaf52cecaca5c1.jpg","2017-System-Map-zoomed-fb128cc8b8731ed19d0be90785259925.jpg","assets/dcmetromap-d41d8cd98f00b204e9800998ecf8427e.css","assets/dcmetromap-e23173c54815b8ee23e374239a16ae0b.js","assets/icons/appicon-192-79c32daf53fdc1863352af242c2cc5fb.png","assets/icons/appicon-280-79f548ea8f334edadb7ce64a96927b92.png","assets/icons/appicon-32-5fe09940ff5a3a06fd26a79ff2b636bd.png","assets/icons/appicon-512-2201683e4add15d7510d21bd36716d3c.png","assets/vendor-0a312920b60cc303ffafa3f5e1806c7a.js","assets/vendor-ec0964f6a245377d4c5a5542b1f8a5fb.css"],c="esw-asset-cache-1",a=n.map(function(e){return new URL(e,self.location).toString()}),s=function(){caches.open(c).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===a.indexOf(t.url)&&e.delete(t)})})})}
self.addEventListener("install",function(e){e.waitUntil(caches.open(c).then(function(e){return Promise.all(a.map(function(t){var n=new Request(t,{mode:"cors"})
return fetch(n).then(function(n){if(n.status>=400){var c=new Error("Request for "+t+" failed with status "+n.statusText)
throw c}return e.put(t,n)}).catch(function(e){console.error("Not caching "+t+" due to "+e)})}))}))}),self.addEventListener("activate",function(t){t.waitUntil(Promise.all([e("esw-asset-cache",c),s()]))}),self.addEventListener("fetch",function(e){var t="GET"===e.request.method,n=-1!==a.indexOf(e.request.url)
t&&n&&e.respondWith(caches.match(e.request,{cacheName:c}).then(function(t){return t||fetch(e.request)}))})
var i=[],f=[],r=new URL("index.html",self.location).toString()
self.addEventListener("install",function(e){e.waitUntil(fetch(r,{credentials:"include"}).then(function(e){return caches.open("esw-index-1").then(function(t){return t.put(r,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index","esw-index-1"))}),self.addEventListener("fetch",function(e){var n=e.request,c="GET"===n.method,a=-1!==n.headers.get("accept").indexOf("text/html"),s=new URL(n.url).origin===location.origin,o=t(n.url,i),d=!f.length||t(n.url,f)
c&&a&&s&&d&&!o&&e.respondWith(caches.match(r,{cacheName:"esw-index-1"}))})})()
