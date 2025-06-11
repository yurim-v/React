
import {useState} from 'react'

function Calculator({ coinName, coinSymbol, coinPrice}){
  const [ calculate, setCalculate ] = useState(false);
  const [ money, setMoney ] = useState(0);

  return(
    <>
      <div>
        <hr />
        <h3>Coin Calculator</h3>

        <label> My Money (USD) : 
          <input value={money} onChange={(e)=>{
            setMoney(e.target.value)
            setCalculate(false)  ;
          }}/>
        </label>
        <button onClick={()=>{{
          setCalculate(true);
        }}}>Calculate</button>
        { calculate ? <p>
          {coinName} ({coinSymbol}) : {money} / {coinPrice} 
        </p> : null}
      </div>
    </>
  )
}

export default Calculator;