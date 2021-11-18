import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseSettings = {
    apiKey: 'AIzaSyDjyI9k5M3eO4Atj7aOkLD_Wew8KBqmE9w',
    authDomain: 'fitlife-app-7dcc5.firebaseapp.com',
    databaseURL: 'https://fitlife-app-7dcc5.firebaseio.com',
    projectId: 'fitlife-app-7dcc5',
    storageBucket: 'fitlife-app-7dcc5.appspot.com',
    messagingSenderId: '748394828297',
    appId: '1:748394828297:android:10aeabc0d9c16d89335ed8',
  };
  
  let app = !firebase.apps.length
    ? firebase.initializeApp(firebaseSettings)
    : firebase.app();
  
  const firestore = app.firestore();
  
  export const database = {
    exercises: firestore.collection("exercises"),
    workouts: firestore.collection("workouts"),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
  };
  
  export const auth = app.auth();
  
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export default app;