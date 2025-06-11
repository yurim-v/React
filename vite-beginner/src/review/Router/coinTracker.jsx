import { useState, useEffect, useMemo } from 'react';
import Calculator from '../components/coinCalculator.jsx'

function CoinTracker(){
  const [ loading, setLoading ] = useState(true);
  const [ coins, setCoins ] = useState([]);
  const [ option, setOption ] = useState('xx');

  async function getCoins(){
    let data = await (await fetch(' https://api.coinpaprika.com/v1/tickers?limit=10')).json();
    setLoading(false)
    setCoins(data);
  }

  const changeHanlder = (event)=>{
    setOption(event.target.value);
  }


  let selectCoin =  useMemo(()=>coins.find(item =>(item.name === option)),[option])


  useEffect(()=>{
    getCoins();
  },[])
  
  return(
    <>
      <h1>CoinTracker {loading ? null : `(${coins.length})`}</h1>
      <div>
        { loading ? <h1>Loading...</h1>: 
          <select value={option} onChange={changeHanlder}>
            <option value='xx'>-------------------------</option>
            {coins.map(coin => (
              <option key={coin.id} value={coin.name}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price}(USD)</option>
            ))}
          </select>
        }
         { option =='xx' ? null : < Calculator coinName={selectCoin.name} coinSymbol={selectCoin.symbol} coinPrice={selectCoin.quotes.USD.price} />}
      </div>
    </>
  )
}

export default CoinTracker;