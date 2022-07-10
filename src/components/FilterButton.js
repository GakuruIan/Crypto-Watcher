import React from 'react'
import './filter.css';

const FilterButton = ({setCurrency,setDays}) => {
  return (
    <div className='filterbar'>
       <div className='btns'>
         <button className='btn btn-primary btn-sm'onClick={()=>setDays(1)}>1 Day</button>
         <button className='btn btn-primary btn-sm' onClick={()=>setDays(7)}>7 Days</button>
         <button className='btn btn-primary btn-sm'  onClick={()=>setDays(14)}>14 Days</button>
         <button className='btn btn-primary btn-sm'  onClick={()=>setDays(30)}>30 Days</button>
       </div>
       <div className="select">
       <select class="form-control form-control-sm" id="exampleFormControlSelect1">
         <option onChange={()=>setCurrency('usd')}>Usd</option>
          <option onChange={()=>setCurrency('eur')}>Eur</option>
          <option>Ksh</option>
       </select>
       </div>
    </div>
  )
}

export default FilterButton