import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDx1OjihR06EJnNRGqlFfjhEgITBl-j5z0",
  authDomain: "info340-final-muse.firebaseapp.com",
  databaseURL: "https://info340-final-muse.firebaseio.com",
  projectId: "info340-final-muse",
  storageBucket: "info340-final-muse.appspot.com",
  messagingSenderId: "858085284392"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

