import { useState, useEffect } from 'react';
import Calculator from '../components/coinCalculator.jsx'

function CoinTracker(){
  const [ loading, setLoading ] = useState(true);
  const [ coins, setCoins ] = useState([]);
  const [ option, setOption ] = useState('xx');
  const [ coin, setCoin ] = useState({});

  async function getCoins(){
    let data = await (await fetch(' https://api.coinpaprika.com/v1/tickers?limit=10')).json();
    setLoading(false)
    setCoins(data);
  }

  const changeHanlder = (event)=>{
    setCoin(coins.find(item =>(item.name === event.target.value)))
    setOption(event.target.value);
  }

  useEffect(()=>{
    getCoins();
  },[])

    useEffect(()=>{
      console.log(coin)
    },[coin])
  
  
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
         { option =='xx' ? null : < Calculator coinName={coin.name} coinSymbol={coin.symbol} coinPrice={coin.quotes.USD.price} />}
      </div>
    </>
  )
}

export default CoinTracker;