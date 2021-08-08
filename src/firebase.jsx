import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDGwqm6Epxrs0bNI7U-NiCA2ao4issM9Ms",
    authDomain: "eshop-coderhouse.firebaseapp.com",
    projectId: "eshop-coderhouse",
    storageBucket: "eshop-coderhouse.appspot.com",
    messagingSenderId: "749537464501",
    appId: "1:749537464501:web:84768270bd0e29abc52efc"
};

//hace que firebase quede conectado a la app de la consola
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    //retorna el acceso al servicio
    return firebase.firestore(app)
}