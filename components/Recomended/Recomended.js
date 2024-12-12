import React,{useState} from 'react'
import { PiLessThanBold } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";
import axios from 'axios';
import FetchingData from '../FetchingData/FetchingData'

import './Recomende.css'

const dropDownItems =[
    {
        id : 1,
        name : "RECOMMENDED"
    },
    {
        id : 2,
        name : "NEWEST FRIST"
    },
    {
        id : 3,
        name : "Popular"
    },
    {
        id : 4,
        name : "PRICE : HIGH TO LOW"
    },
    {
        id : 5,
        name : "PRICE : LOW TO HIGH"
    },
    
]

const Recomended = () => {
    
    const [filterName,setFilterName] = useState(true);
    const changeFilterStatus = () => {
        setFilterName((prvState) => !prvState)
    }

  return (
    <div className="recomended-container">
        <div className="recomende-items-container">

        <div className="left-recomended">
          <p className="items-count">3425 ITEMS</p>
          </div>

          <div className="mobile-none">
          {filterName ? <PiLessThanBold className="greater"/>: <FaGreaterThan className="greater" /> }
          <p className="filter-text"onClick={changeFilterStatus} > {filterName ? "HIDE FILTER" : 'SHOW FILTER'}</p>
          </div>

        <div className="right-recomended">
           <select>
        {dropDownItems.map((eachItem) => (
            <option key={eachItem.id}>{eachItem.name}</option>
        ))}
           </select>
        </div>

        </div>

        <div className="movile-view">
            <button>FILTER</button>
            <p>|</p>
            <select>
        {dropDownItems.map((eachItem) => (
            <option key={eachItem.id}>{eachItem.name}</option>
        ))}
           </select>
    </div>
</div>
  )

}


export default Recomended