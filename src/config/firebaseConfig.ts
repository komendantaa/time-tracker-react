import firebase from 'firebase';

// Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDHbf6vM0pKfygrjWsYcCJNWUDZW3XjSjk',
  authDomain: 'timepracticsample.firebaseapp.com',
  databaseURL: 'https://timepracticsample.firebaseio.com',
  projectId: 'timepracticsample',
  storageBucket: '',
  messagingSenderId: '781111925343',
  appId: '1:781111925343:web:02375ea6ccdbf2a9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
