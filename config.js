import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
    apiKey: "AIzaSyCqD12gqOUutZL68Mve_S9sC2DE9kc5YKM",
    authDomain: "dever-c78.firebaseapp.com",
    projectId: "dever-c78",
    storageBucket: "dever-c78.appspot.com",
    messagingSenderId: "443019394955",
    appId: "1:443019394955:web:f4deda336bb400b929798e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
