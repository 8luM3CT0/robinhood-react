import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDRH15gVP1bG44u6MTWPWpnId-hrHzbED0",
    authDomain: "robinhood-cloa.firebaseapp.com",
    projectId: "robinhood-cloa",
    storageBucket: "robinhood-cloa.appspot.com",
    messagingSenderId: "1060830601784",
    appId: "1:1060830601784:web:914c49d949eeffcf7a3ccd",
    measurementId: "G-HL58RPW8G8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export {db};