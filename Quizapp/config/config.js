import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOkwRb04DGrcm0ckoAdV8AAPaJ5A551I8",
  authDomain: "quiz-mobile-app-ff298.firebaseapp.com",
  projectId: "quiz-mobile-app-ff298",
  storageBucket: "quiz-mobile-app-ff298.appspot.com",
  messagingSenderId: "972958942819",
  appId: "1:972958942819:web:ac6df48913d709742e5a56",
  measurementId: "G-8PH4Q0QJDD",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
