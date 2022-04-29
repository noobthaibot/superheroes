import { initializeApp } from "firebase/app";
import "firebase/storage";
import firebase from "firebase/compat/app";
import { getStorage, ref } from "firebase/storage";
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
const storage = getStorage(app);
const storageRef = ref(storage, "some-child");
const heroesCollection = collection(db, "heroes");
export { storage, storageRef, firebase };
export default heroesCollection;

// import firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAxEmg3UfAz01IP3SvVilJd7Tz5E1Wcxlw",
//   authDomain: "superheroes-a276e.firebaseapp.com",
//   projectId: "superheroes-a276e",
//   storageBucket: "superheroes-a276e.appspot.com",
//   messagingSenderId: "775855747390",
//   appId: "1:775855747390:web:278a1b7717c418fde8fc6f",
// };

// firebase.initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export { projectStorage, projectFirestore, timestamp };
