import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Qe0Lm13kujGaODaZCg5UJAF-nsFVUl8",
  authDomain: "jump-mangas-eccomerce.firebaseapp.com",
  projectId: "jump-mangas-eccomerce",
  storageBucket: "jump-mangas-eccomerce.appspot.com",
  messagingSenderId: "1016455218676",
  appId: "1:1016455218676:web:846cf6cdcb37049eab65a1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);