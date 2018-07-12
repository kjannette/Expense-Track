import * as firebase from 'firebase';

const config = {
  apiKey: et.config.FIREBASE_API_KEY,
  authDomain: et.config.FIREBASE_AUTH_DOMAIN,
  databaseURL: et.config.FIREBASE_DATABASE_URL,
  projectId: et.config.FIREBASE_PROJECT_ID,
  storageBucket: et.config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: et.config.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
