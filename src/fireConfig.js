import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvsDlHEJqetS1jxWb6Kvlkau_5slVroKo",
  authDomain: "firecommerce-e3e1a.firebaseapp.com",
  projectId: "firecommerce-e3e1a",
  storageBucket: "firecommerce-e3e1a.appspot.com",
  messagingSenderId: "157955767503",
  appId: "1:157955767503:web:11e2052527d720aded4bba",
  measurementId: "G-W29PWGVS4B"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB; 