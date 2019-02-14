import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';



class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAJWhU0phIvUM0va8NBFDrq8VswW-Xaj1A",
      authDomain: "latmanagerjc7.firebaseapp.com",
      databaseURL: "https://latmanagerjc7.firebaseio.com",
      projectId: "latmanagerjc7",
      storageBucket: "latmanagerjc7.appspot.com",
      messagingSenderId: "70482108872"
    };
    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
