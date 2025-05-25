import { useEffect, useState } from 'react';

function App(){
  const [ toDo, setToDo ] = useState('');
  const changeHandler = (e)=>{setToDo(e.target.value)};

  const [ toDos , setToDos] = useState([]);
  const subHandler = (event)=>{
    event.preventDefault();
    if(toDo === ''){
      return;
    }  
    setToDos(current => [ toDo, ...current]);
    setToDo('');
  }

  useEffect(()=>{console.log(toDos)}, [ toDos ]);

  return(
    <div>
      <h1> To Do List : {toDos.length}</h1>
      <form  onSubmit={subHandler}>
        <input type='text' placeholder='Write your to do .... '
        value={toDo} onChange={changeHandler}/>
        <button> Add To Do </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index)=>(<li key={index} >{item}</li>))}
      </ul>
    </div>
  )
}

export default App; 