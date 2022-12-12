import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use

import { getAuth, onAuthStateChanged , createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {} from "firebase/database";

// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";



export default class Firebase {

    constructor(){
        const firebaseConfig = {
            apiKey: "AIzaSyCAZlLlx8PC4JX69JICsVY9QHeD56kM9eQ",
            authDomain: "geolocation-relink.firebaseapp.com",
            projectId: "geolocation-relink",
            storageBucket: "geolocation-relink.appspot.com",
            messagingSenderId: "367691982545",
            appId: "1:367691982545:web:f47fd7085ff6c140de87f0",
            measurementId: "G-1F9BD2M11W"
        };

        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
    
    }

    get signUpEmailPassword(){

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
        });
    }


    get signInEmailPassword(){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        });
    }

    get userChechConnection(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              return uid;
              // ...
            } else {
              // User is signed out
              // ...
              return null;
            }
          });
    }
}


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase