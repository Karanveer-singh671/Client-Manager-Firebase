import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
// import { reduxFirestore } from 'redux-firestore';
//Reducers

const firebaseConfig = {
	apiKey: 'AIzaSyC6gTGsIoTg7YDWHZyiUnLcmwzN7noyjc4',
	authDomain: 'reactclientmanager-1b59b.firebaseapp.com',
	databaseURL: 'https://reactclientmanager-1b59b.firebaseio.com',
	projectId: 'reactclientmanager-1b59b',
	storageBucket: 'reactclientmanager-1b59b.appspot.com',
	messagingSenderId: '784371773377'
};

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
	userFirestoreForProfile: true // Firestore for profile instead of realTime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
	// reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
	rootReducer,
	initialState,
	compose(reactReduxFirebase(firebase), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store;
