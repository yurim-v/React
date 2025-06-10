import Navi from './components/Navigator.jsx';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Home from './Router/home.jsx';
import CoinTracker from './Router/coinTracker.jsx';
import Calculator from './Router/calculator.jsx';
import MovieList from './Router/MovieList.jsx';

import './css/home.css'


function App(){

  return(
    <> 
      <Navi />
      <Router>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/coinTracker' element={<CoinTracker />}/>
          <Route path='calculator' element={<Calculator />}/>
          <Route path='/movieList' element={<MovieList /> }/>


        </Routes>
      </Router>
    </>
  )

}

export default App;