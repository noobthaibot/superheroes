import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxEmg3UfAz01IP3SvVilJd7Tz5E1Wcxlw",
  authDomain: "superheroes-a276e.firebaseapp.com",
  projectId: "superheroes-a276e",
  storageBucket: "superheroes-a276e.appspot.com",
  messagingSenderId: "775855747390",
  appId: "1:775855747390:web:278a1b7717c418fde8fc6f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const heroesCollection = collection(db, "heroes");

export default heroesCollection;
