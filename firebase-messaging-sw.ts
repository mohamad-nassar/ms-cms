
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/registration';
const firebaseConfig = {
     apiKey: "AIzaSyCGOmGJxdy1EmnelwLpDCC6HkCsEqz5z3E",
     authDomain: "metropolitan-security.firebaseapp.com",
     projectId: "metropolitan-security",
     storageBucket: "metropolitan-security.appspot.com",
     messagingSenderId: "612974917487",
     appId: "1:612974917487:web:f9de02274ac3177f0cda9a",
     measurementId: "G-WBK06HNWG1"
   };
   
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/* messaging.onBackgroundMessage(function (payload) {
   console.log("Received background message ", payload);
 
   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
     icon: "/logo192.png",
   };
   // eslint-disable-next-line no-restricted-globals

 }); */


//messaging.setBackgroundMessageHandler(function(payload) {
  //   const promiseChain = clients
       //   .matchAll({
       //        type: "window",
      //         includeUncontrolled: true,
      //    })
      //    .then((windowClients) => {
               //   for (let i = 0; i < windowClients.length; i++) {
                  //     const windowClient = windowClients[i];
                  //     windowClient.postMessage(payload);
              //    }
         //    })
          //   .then(() => {
           //       return registration.showNotification("my notification title");
          //   });
      //   //  return promiseChain;
  // });
  // self.addEventListener("notificationclick", function(event) {
     //   console.log(event);
  // });
