

import Button from "./Button.js"
import styles from './App.module.css'

import { useState, useEffect } from 'react'

function App() {
  const [ count, setCount ] = useState(0);
  const clickHandler = ( ) => { setCount( current => current + 1)}

  console.log('I run all the time ');

  useEffect(()=>{
    console.log('I run only Once ');
  }, [] );

  const [ keyword, setKeyword ] = useState("");
  const searchHandle = (event)=> {
    setKeyword( event.target.value );
  }

  useEffect(()=>{

    if( keyword !== "" ){
      console.log('I run when "keyword" changes');
    }

  }, [ keyword ] );
  
  useEffect(()=>{
    console.log('I run when "count" changes');
  }, [ count ] );

  useEffect(()=>{
    console.log('I run when "count & keyword" changes');
  }, [ count , keyword ] );



  return (
    <div>

      <input type='text' placeholder='Search' 
        value={ keyword }
        onChange={ searchHandle } 
      />


      <h1> Count : { count } </h1>
      < Button 
        onClick = { clickHandler }
        text='Click ' />
    </div>
  );
}

export default App;
