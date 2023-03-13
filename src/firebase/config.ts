import firebase from "firebase/app"
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAXkomR4hnS6V6l5SiVfy8TbkCoHOZOzoY",
        authDomain: "authnextproject.firebaseapp.com",
        projectId: "authnextproject",
        storageBucket: "authnextproject.appspot.com",
        messagingSenderId: "180464378609",
        appId: "1:180464378609:web:d522ae8423e15048b37f50"
      
        
    })
}

export default firebase