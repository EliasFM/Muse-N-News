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
  apiKey: "AIzaSyARIuEBgRNU3mxAVywagOALgpxHioELz1c",
  authDomain: "final-project-b9c84.firebaseapp.com",
  databaseURL: "https://final-project-b9c84.firebaseio.com",
  projectId: "final-project-b9c84",
  storageBucket: "final-project-b9c84.appspot.com",
  messagingSenderId: "141207566970"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

