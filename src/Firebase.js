import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCfE7W18eZHmbUf0S8HS5GLexhjeIRdNWQ",
    authDomain: "whatsapp-96cd0.firebaseapp.com",
    projectId: "whatsapp-96cd0",
    storageBucket: "whatsapp-96cd0.appspot.com",
    messagingSenderId: "429073462375",
    appId: "1:429073462375:web:ef384736cab066eae9d0c2",
    measurementId: "G-EQ04FT2B0C"
  };
  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { auth ,provider};
  
export default db;