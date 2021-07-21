import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrMFd_2H8x_Sw_OiqI9TcSbTmHOnBOnmc",
    authDomain: "linkedin-clone-f9b46.firebaseapp.com",
    projectId: "linkedin-clone-f9b46",
    storageBucket: "linkedin-clone-f9b46.appspot.com",
    messagingSenderId: "324458867166",
    appId: "1:324458867166:web:dc8d132fa97e8a0561554f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db,auth};