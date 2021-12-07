// src/firebaseConfig.js
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/storage'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRg5-8wcpCuUcjYj-GOJf6uKm87OB3RM",
  authDomain: "jobboard-96b1c.firebaseapp.com",
  projectId: "jobboard-96b1c",
  storageBucket: "jobboard-96b1c.appspot.com",
  messagingSenderId: "113617482383",
  appId: "1:113617482383:web:694e90946376fef882f6fa"
};

  const fb =  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
 
  export{fb,db}