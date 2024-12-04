import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './configs/firebase.config';

import TextToSpeech from './components/TextToSpeech';
import LoginModule from './modules/auth/login';

import './App.css'

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

  return (
    <div>
      <h1>Text to Speech App</h1>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <TextToSpeech text={text} />
    </div>
  );
};

export default App;