
import { useState, useEffect } from 'react'

function Hello(){
  useEffect(()=>{
    console.log(' Created :) ');
    return ()=>{console.log(' Destroyed :( ')}
  }, []);
  return(<h1> Hello ~ </h1>)
}

function App() {
  const [ showing, setShowing ] = useState(false);
  const clickHandler = ()=>{
    setShowing(prev => !prev);
  }
  return (
    <div>
      <button onClick={clickHandler}> { showing ? 'Hide' : 'Show'} </button>
      { showing ? <Hello /> : null }
    </div>
  );
}

export default App;
