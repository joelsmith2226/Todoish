import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
   apiKey: "AIzaSyBUZuJQafBjuKxufsfH2YvHCGCZqa1F5Mw",
   authDomain: "todoist-1fa7f.firebaseapp.com",
   databaseURL: "https://todoist-1fa7f.firebaseio.com",
   projectId: "todoist-1fa7f",
   storageBucket: "todoist-1fa7f.appspot.com",
   messagingSenderId: "676670951114",
   appId: "1:676670951114:web:59f68672f2ab471be26e33",
   measurementId: "G-DTLS44ET7F"
});

export { firebaseConfig as firebase };
