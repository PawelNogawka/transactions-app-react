
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHEYeXwpV2jW42AqsH8vgMz9d_F08JvjQ",
  authDomain: "mymoney-f6683.firebaseapp.com",
  projectId: "mymoney-f6683",
  storageBucket: "mymoney-f6683.appspot.com",
  messagingSenderId: "476499383119",
  appId: "1:476499383119:web:0ba782e59fd813c9306b3a"
};


firebase.initializeApp(firebaseConfig)


const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}