import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiBTX5vOdQeEzTP1b3mlFr7Dv9qpf-Sdg",
  authDomain: "webmeet-e594b.firebaseapp.com",
  projectId: "webmeet-e594b",
  storageBucket: "webmeet-e594b.appspot.com",
  messagingSenderId: "531937788660",
  appId: "1:531937788660:web:28138a5401622b454054a1",
  measurementId: "G-X0TE4QX8JB"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;