import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom' 

import Coinchart from '../components/Coinchart'
import { BsExclamationCircle } from "react-icons/bs";
import './coin.css';
//https://api.coingecko.com/api/v3/coins/bitcoin

const Coin = () => {
   const [coin,setCoin]=useState([]);
   const params=useParams();
   const url=`https://api.coingecko.com/api/v3/coins/${params.coinid}`;
   useEffect(()=>{
       axios.get(url).then((res)=>{
        setCoin(res.data)
        // console.log(res);
       }).catch(err=>console.log(err))
   },[]);
   function truncate(str,n){
    return str?.length>n? str.substr(0,n-1) +"...":str;
  }
  return (
    <>
      <div className="header_content">
        <header>
          <div className="coin_details">
            <div className="coin_info">
                 <div>
                    <img src={coin.image ? coin.image.large :null}/>
                    <h1>{coin.name}</h1>
                 </div>
                  <div className="coin_rank">
                      <h4>Rank #{coin.market_cap_rank}</h4>
                  </div>
            </div>
            <div className="value">
                  <h3>${coin.market_data?.current_price?.usd.toLocaleString()}</h3>
                  <span className={coin.price_change_percentage_24h > 0 ? 'up' : 'down'}>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</span>
              </div>
          </div>
            <div className="card_content">
                 <div className="card_info">
                     <h1>Description</h1>
                    <p>{truncate(coin.description?.en,625)}</p>
                 </div>
            </div>
        </header>
      </div>
      <div className="cards">
         <div className="card_det">
             <div className="coin_detail">
              <h5>Market Cap</h5>
              <p><BsExclamationCircle/></p>
             </div>
             <h2>$ {coin.market_data?.market_cap.usd.toLocaleString()}</h2>
         </div>
         <div className="card_det">
             <div className="coin_detail">
              <h5>Fully Diluted</h5>
              <p><BsExclamationCircle/></p>
             </div>
             <h2>$ {coin.market_data?.fully_diluted_valuation?.usd?.toLocaleString()}</h2>
         </div>
         <div className="card_det">
             <div className="coin_detail">
              <h5>Volume</h5>
              <p><BsExclamationCircle/></p>
             </div>
             <h2>$ {coin.market_data?.total_volume.usd?.toLocaleString()}</h2>
         </div>
         <div className="card_det">
             <div className="coin_detail">
              <h5>Currency Supply</h5>
              <p><BsExclamationCircle/></p>
             </div>
             <h2>$ {coin.market_data?.total_supply?.toLocaleString()}</h2>
         </div>
      </div>
      <div className="chart">
       
        <Coinchart coinName={params?.coinid}/>
      </div>
    </>
  )
}

export default Coin