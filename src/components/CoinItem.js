import React from 'react'
import './coinitem.css';
import Row from './Row';

const CoinItem = ({coins}) => {
  return (
    <table className="table table-borderless table-dark py-4" id='table'>
      <thead className='sticky'>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col" className='mini-mobile'>Symbol</th>
      <th scope="col">Coin</th>
      <th scope="col">Price</th>
      <th scope="col">24h</th>
      <th scope="col" className='mini-mobile'>Volume</th>
      <th scope="col" className='mobile'>Market cap</th>
    </tr>
  </thead>
  <tbody>
    {
       coins.map((coin)=>{
        return (  
               <Row coin={coin}/>
        )
       })
    }
    
  </tbody>
</table>
  )
}

export default CoinItem