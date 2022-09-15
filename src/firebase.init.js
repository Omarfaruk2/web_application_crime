// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCVXaLfBh76uEiD9KpL_SVB2KGo8NsBbO8",
    authDomain: "web-application-crime.firebaseapp.com",
    projectId: "web-application-crime",
    storageBucket: "web-application-crime.appspot.com",
    messagingSenderId: "608597635049",
    appId: "1:608597635049:web:0d2d79688ec0dc9283a578"


    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    // appId: process.env.REACT_APP_APP_ID,




}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth