import React,{useEffect,useState} from 'react'
import axios from 'axios';
import FilterButton from '../components/FilterButton';
import './chart.css';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);
const Coinchart = ({coinName}) => {
  const [coinID,setCoinInfo]=useState(coinName);
  const[history,setHistory]=useState([]);
  const [days,setDays]=useState(1);
  const [currency,setCurrency]=useState('usd');
  async function fetchHistory(){
    const response= await axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency}&days=${days}`)
    setHistory(response.data.prices);
 }
  useEffect(()=>{
      fetchHistory();
      // setHistory(response.data?.prices);
  },[currency,days]);
  //
  console.log(history);
  return (
    <div className='chart'>
      <FilterButton setCurrency={setCurrency} setDays={setDays}/>
       <Line  data={{
            labels:history.map((coin)=>{
              let date=new Date(coin[0]);
              let time=date.getHours() > 12 ? `${date.getHours()-12}:${date.getMinutes()} PM` 
                                            : `${date.getHours()}:${date.getMinutes()} AM` ;
              return days === 1 ? time : date.toLocaleDateString()
        }),
        datasets:[{
          data:history.map((coin)=>coin[1]),
          label:`Price (past ${days} day(s)) in ${currency}`,
          borderColor:"rgb(123, 0, 247)",
          fill:true,
          backgroundColor:"rgba(123, 0, 247,0.3)"
        }]
       }}
       options={{
        responsive:true,
        elements:{
          point:{
            radius:1
          }
        }
       }}
       />
    </div>
  )
}

export default Coinchart