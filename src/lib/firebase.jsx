import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import the seed file heare

const config = {};

const firebase = Firebase.initializeApp(config);
const { fieldValue } = Firebase.firestore;

// call the seed file only onece

export { firebase, fieldValue };
