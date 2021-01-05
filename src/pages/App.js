import logo from '../images/logo.svg';
import StateClass from '../components/StateClass'
// import StateFunction from '../components/StateFunction'
import StateFunction from '../components/StateFunc02useEffect'
import './App.css';

import {  useEffect, useState } from 'react'

function App() {
  const [bool,setBool] = useState(true)

  if(bool){
    return (
      <div className="App">
        <StateClass></StateClass>
        <StateFunction></StateFunction>
        <button onClick={ () => { setBool(!bool) } }>点击我</button>
      </div>
    );
  }else{
    return (
      <div className="App">
        <StateClass></StateClass>
        <button onClick={ () => { setBool(!bool) } }>点击我</button>
      </div>
    );
  }
  
}

export default App;
