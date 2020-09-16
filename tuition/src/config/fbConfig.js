import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyA1zHHX9klvqPnD1zu2cFU35XliW8LVHTM",
  authDomain: "tuition-6b9fb.firebaseapp.com",
  databaseURL: "https://tuition-6b9fb.firebaseio.com",
  projectId: "tuition-6b9fb",
  storageBucket: "tuition-6b9fb.appspot.com",
  messagingSenderId: "180161865773",
  appId: "1:180161865773:web:5ba5bff9a4b85f1d5630a4",
  measurementId: "G-D0LCF7YRJ8"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 