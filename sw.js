var cachename="pwa";
var filecache={
  '/',
  '/index.html'
}
self.addEventListener('install',function(e) {
  console.log("installed successfully..!");
  e.waitUntil(
    caches.open(cachename).then(function(chache) {
      console.log("catching files from cache");
      return ca.addAll(filescache);
    })
  )
})
self.addEventListener('activate',function(e)){
  console.log("activated successfully..!");
  e.waitUntil(
    caches.keys(),then(function(c) {
      return promise.all(c.map(function(thiscache){
        if(thiscache!==cachename){
          return caches.delete(thiscache);
          console.log("service worker recovering files");
        }
      }))
    }
  )
})
self.addEventListener('fetch',function(e)){
  console.log("fetched successfully..!");
})
