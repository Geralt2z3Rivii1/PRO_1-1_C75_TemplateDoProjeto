import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {

  apiKey: "AIzaSyCt6IBZTWFl188U7OWfaIfdZsrzCDGM7QU",
  authDomain: "cp71-770e7.firebaseapp.com",
  projectId: "cp71-770e7",
  storageBucket: "cp71-770e7.appspot.com",
  messagingSenderId: "464252195797",
  appId: "1:464252195797:web:94419b02532a95ff3a235c"


};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
