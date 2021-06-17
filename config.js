import firebase from 'firebase';
require('@firebase/firestore');

export const firebaseConfig = {
  apiKey: "AIzaSyCobcjBmkeDzXoPhoOyg4m8PiqlNV1Ori8",
  authDomain: "storytelling-app-cd6aa.firebaseapp.com",
  databaseURL: "https://storytelling-app-cd6aa-default-rtdb.firebaseio.com",
  projectId: "storytelling-app-cd6aa",
  storageBucket: "storytelling-app-cd6aa.appspot.com",
  messagingSenderId: "735117549269",
  appId: "1:735117549269:web:b92395ccfffbe49c260c5c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}