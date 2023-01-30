import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCvwrBuIDCfJBWwP3zvptqRwHxOqHUOqv0",
  authDomain: "e-ride-95a1b.firebaseapp.com",
  projectId: "e-ride-95a1b",
  storageBucket: "e-ride-95a1b.appspot.com",
  messagingSenderId: "368291382147",
  appId: "1:368291382147:web:f4fb69a6e298b466afacb6"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
