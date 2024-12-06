import React, { useEffect, useState } from 'react';
import { Input, Tabs } from 'antd';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './configs/firebase.config';

import TextToSpeech from './components/TextToSpeech';
import LoginModule from './modules/auth/login';

import './App.css'
import Header from './modules/main/components/Header';
import MainModule from './modules/main';

const App = () => {
  const [user, setUser] = useState(null)
  const [text, setText] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (_user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = _user.uid;
        // ...
        console.log("uid", uid)

        setUser(_user)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });
  }, [])

  console.log('user', user)

  if (!user) {
    return <LoginModule />
  }

  return <MainModule />
};

export default App;