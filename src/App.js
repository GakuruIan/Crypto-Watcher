import './App.css';
import Coins from './components/Coins';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom';
import Coin from './Routes/Coin';
function App() {
  return (
    <div className="App container">
      <Nav/>
      <Routes>
         <Route path='/' element={ <Coins/>}/>
         <Route path='/coin' element={<Coin/>}>
           <Route path=':coinid' element={<Coin/>}/>
         </Route>
      </Routes>
      
    </div>
  );
}

export default App;
