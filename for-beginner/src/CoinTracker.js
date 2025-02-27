import { useState, useEffect } from 'react';

function Calculater({ coinName , coinPrice}){
  const [ dollar , setDollar ] = useState(0)
  const onChange = (e)=>{
    setDollar(e.target.value);
    setShowing(false);

  }

  const [ showing, setShowing] = useState(false);
  const onClick = (e)=>{
    setShowing(true);
  }
  return(
    <div>
      <input type='number'  placeholder='Wrtie Dollar' value={dollar} onChange={onChange}/>
      <button onClick={onClick}> Calculate </button>
      {showing ? <p> {coinName} : {dollar / coinPrice }</p> : null}
    </div>
  )
}

function App(){
  const [ loading, setLoading ] =  useState(true);
  const [ coins, setCoins ] = useState([]);

  const [ value, setValue ] = useState('BTC')
  const onChange = (e)=>{
    setValue(e.target.value);
  }

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
     .then(response => response.json())
     .then(data =>{
        setCoins(data);
        setLoading(false);
     })
  },[]);

  return(
    <div>
      <h1>The Coins ! { loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> 
       :   
        <select value={value} onChange={onChange}  title="Choose an option">
          {coins.map(coin =>(
            <option key={coin.id} value={coin.symbol} > 
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>))}
        </select> }
    
      {coins.map((coin)=>
        (value===coin.symbol  ? 
        <Calculater coinName={coin.name} coinPrice={coin.quotes.USD.price}/> : null ))
      }

  
    </div>
  )
}

export default App ; 