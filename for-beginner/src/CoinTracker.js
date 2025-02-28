import { useState, useEffect, useMemo } from 'react';

function Calculator({coinName, coinSymbol, coinPrice}){
  const [ value, setValue] = useState("");
  const [show, setShow]  = useState(false);

  const onChange = (e)=>{
    setValue(e.target.value);
    setShow(false)
  }
  
  const onClick = (e)=>{setShow(true)}
  return(
    <div>
    <h2> Calculator </h2>
    <input type='number' placeholder='금액(USD)을 입력하세요.' value={value} onChange={onChange}/>
    <button onClick={onClick}> calculate </button>
    { show ? (
      <div>
        <p> My Money : {value} (USD)</p>
        <p> {coinName} : {value} / {coinPrice} ({coinSymbol})</p>
      </div>
    ) : null }

  </div>
  )
}
export default function App(){
  const [ load , setLoad ] = useState(true);
  const [ coins , setCoins ] = useState([]);
  const [ option , setOption] = useState('xx');

  const onSelect = (e)=>{setOption(e.target.value)}

  const selectCoin = useMemo(() => coins.find((item) => item.symbol === option), [option, coins]);

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
     .then(response => response.json())
     .then( data =>{
        setCoins(data);
        setLoad(false);
     })
  },[])
  return(
    <div>
      <div>
        <h1> Coin Tracker { load ? null : `(${coins.length})` }  </h1>
        { load ? <h2>Loading....</h2> :  
          <select value={option} onChange={onSelect}>
            <option value='xx'>------------------</option>
            {coins.map(item=>(
              <option key={item.id} value={item.symbol}> 
                {item.name}({item.symbol}) : {item.quotes.USD.price} (USD)
              </option>
            ))}
          </select>
         }
      </div>
      <hr />

      { load || option ==='xx' ? null : <Calculator coinName={selectCoin.name} coinSymbol={selectCoin.symbol} coinPrice={selectCoin.quotes.USD.price} /> }
      
    </div>
  )
}