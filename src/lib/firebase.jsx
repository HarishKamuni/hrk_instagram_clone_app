import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import the seed file here
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBg0q1uVXK58qsJSMIgo5Dq7XmYQ108YiI',
  authDomain: 'hrk-mern-blog.firebaseapp.com',
  projectId: 'hrk-mern-blog',
  storageBucket: 'hrk-mern-blog.firebasestorage.app',
  messagingSenderId: '127506150714',
  appId: '1:127506150714:web:69b629e94ec03098578c03',
};

const firebase = Firebase.initializeApp(config);
const { fieldValue } = Firebase.firestore;

// call the seed file only onece
seedDatabase(firebase);

export { firebase, fieldValue };
// stop project 