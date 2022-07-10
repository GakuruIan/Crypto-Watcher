import React,{useEffect,useState} from 'react'
import CoinItem from './CoinItem';
import axios from "axios";

const Coins = () => {
    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";
    const [coins,setCoins]=useState([]);
    useEffect(()=>{
           axios.get(url)
           .then((response)=>{
            setCoins(response.data)
           console.log(response.data)
          })
           .catch(err=>console.log(err));
    },[])
  return (
    <div>
          <CoinItem coins={coins}/>
    </div>
  )
}

export default Coins