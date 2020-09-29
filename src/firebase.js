
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCootVNdmGN_rSqcjb_dmJ-YQDdeScuBg",
    authDomain: "chatapp-e8faa.firebaseapp.com",
    databaseURL: "https://chatapp-e8faa.firebaseio.com",
    projectId: "chatapp-e8faa",
    storageBucket: "chatapp-e8faa.appspot.com",
    messagingSenderId: "254599987484",
    appId: "1:254599987484:web:5a01ff9e94a60fa1273ad9",
    measurementId: "G-NMQ1GEC2P0"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;