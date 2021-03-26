import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAREGO2KokPIQq_co8ohHl7mGoJgWR4XhE",
    authDomain: "netflix-app-20c4a.firebaseapp.com",
    projectId: "netflix-app-20c4a",
    storageBucket: "netflix-app-20c4a.appspot.com",
    messagingSenderId: "985112851165",
    appId: "1:985112851165:web:52078b5b94dad53261e134",
    measurementId: "G-KZ78FRG1HF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {auth};
  export default db;