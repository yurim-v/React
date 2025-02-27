import { useState, useEffect } from 'react';

function Calculator({ coinName, coinSymbol, coinPrice}){
  const [ show, setShow] = useState(false);
  const [ money, setMoney ] = useState(0);

  const onMoney = (e)=>{
    setMoney(e.target.value);
    setShow(false)
  };
  const onClick = (e)=>{
    setShow(true);
  }
  return(
    <div>
      <h3>Coin Calculator</h3>
      <input onChange={onMoney} value={money} type='number' />
      <button onClick={onClick}>Calculate</button>
      { show ? (
        <div>
          <p> My Money : {money} (USD)</p>
          <p> {coinName} : {money / coinPrice} ({coinSymbol})</p>
        </div>
        ) : null}
      
    </div>
  )
}

export default function App(){
  const [ loading , setLoading ] = useState(true);
  const [ coins , setCoins ] = useState([]);
  const [ value, setValue ] = useState('BTC');

  const onSelect = (e)=>{
    setValue(e.target.value); 
  };

  const selectCoin = coins.find((item)=>item.symbol === value);
  console.log(selectCoin);

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
     .then(response => response.json())
     .then(data => {
        setLoading(false);
        setCoins(data);
     })
  },[])

  return(
    <div>
      <h1> The Coin Tracker ! {loading ? null : `(${coins.length})` }</h1>
      { loading ? <h2>Loading...</h2> : 
        <select onChange={onSelect} value={value}>
          {coins.map(item=>(
            <option key={item.id} value={item.symbol}> {item.name}({item.symbol}) : {item.quotes.USD.price} USD</option>
          ))}
        </select> }

        { loading ? null : 
          <Calculator 
            coinName={selectCoin.name} coinSymbol={selectCoin.symbol} coinPrice={selectCoin.quotes.USD.price}/>}
    </div>

  )
}