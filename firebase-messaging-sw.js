importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyAEwtucqX8oZdbWk4tkaoJRni44LJpi7H4",
    authDomain: "test-2c155.firebaseapp.com",
    projectId: "test-2c155",
    storageBucket: "test-2c155.appspot.com",
    messagingSenderId: "447077885951",
    appId: "1:447077885951:web:d10dfcaddf2442a9abe9ca"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
