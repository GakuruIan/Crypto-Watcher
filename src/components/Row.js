import React from 'react'
import {Link} from 'react-router-dom';
import Coin from '../Routes/Coin';
import './row.css';
const Row = ({coin}) => {
  return (
    <tr >                 
    <td>{coin.market_cap_rank}</td>
    <td className='mini-mobile'>{coin.symbol}</td>
    <td>
    <Link to={`coin/${coin.id}`} element={Coin}>
      <div>
      <img src={coin.image}/>
        {coin.name}
      </div>
        </Link>
        </td>
    <td>$ {coin.current_price}</td>
    <td className={coin.price_change_percentage_24h > 0 ? 'up' : 'down'}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
    <td className='mini-mobile'>{coin.total_volume.toLocaleString()}</td>
    <td className='mobile'>{coin.market_cap.toLocaleString()}</td>
  </tr>
  )
}

export default Row