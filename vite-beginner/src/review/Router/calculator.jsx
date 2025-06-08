
import '../css/home.css'
import { useState } from 'react'

function Calculater(){
  const [ time, setTime ] = useState(0);
  const [ invert, setInvert ] = useState(true)

  return(
    < >
      <h1>Calculater</h1>
      <div>
        <label>
          Hour : 
          <input type='number' placeholder='시간을 입력하세요...' value={invert ? time : Math.floor(time/60) } disabled={!invert}
            onChange={(e)=>{
              setTime(e.target.value);
            }}/>
        </label>
        <br />
        <label>
          Minute : 
          <input type='number' placeholder='분을 입력하세요...' disabled={invert} value={invert ? time * 60 : time} 
           onChange={(e)=>{ setTime(e.target.value);}}/>
        </label>
        <br/>
        <p> 입력값 : {time}</p>
        <br />
        <button class="btn btn-primary"   onClick={()=>{
          setInvert(prev => !prev);
          setTime(0);
        }}>Invert</button>
        <button class="btn btn-danger"   onClick={()=>{ setTime(0);}}>Reset</button>
      </div>

    </>
  )
}

export default Calculater;