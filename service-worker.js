function getEndpoint() {
  return self.registration.pushManager.getSubscription()
  .then(function(subscription) {
    if (subscription) {
      return subscription.endpoint;
    }

    throw new Error('User not subscribed');
  });
}
self.addEventListener('install', function(e) {
  e.waitUntil(
    setTimeout(() => {
      console.log('SW: install');
      return true;
    }, 5000)
  );
});
self.addEventListener('push', function(event) {
  event.waitUntil(
    getEndpoint()
    .then(function(endpoint) {
      return true
    })
    .then(function(response) {
      return "asd"
    })
    .then(function(payload) {
      self.registration.showNotification('ServiceWorker Cookbook', {
        body: payload,
      });
    })
  );
});