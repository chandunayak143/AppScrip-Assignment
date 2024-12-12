import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import './FetchingData.css'

const FetchingData = () => {
  const [productsData,setProductsData] = useState([]);
   

  useEffect(() => {
    
    axios.get('https://fakestoreapi.com/products') 
      .then(response => {
        setProductsData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.message); 
      });
  }, []); 

  return (
    <div className="product-display-container">
      <div className="side-bar">
        <div className="check-box-text">
          <input type="checkbox" className='check-box'/>
        <p>CUSTOMIZBLE</p>
        </div>
        <hr className="hrline"/>
        <div className="drop-down">
          <select>
            <option>IDEAL FRO</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>
        <p className="un-select-text">Unselect all</p>
       
          <div className="check-box-con">
          <div className="check-box-desc">
          <input type="checkbox" className="check-box"/>
          <p>Men</p>
          </div>
          <div className="check-box-desc">
          <input type="checkbox" className="check-box"/>
          <p>Women</p>
          </div>
          <div className="check-box-desc">
          <input type="checkbox" className="check-box"/>
          <p>Baby & Kids</p>
          </div>
          </div>
          <hr className="hrline"/>
          <div className="drop-down">
          <select>
            <option>OCCASION</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>

        <div className="drop-down">
          <select>
            <option>WORK</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>

        <div className="drop-down">
          <select>
            <option>FABRIC</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>

        <div className="drop-down">
          <select>
            <option>SEGMENT</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>

        <div className="drop-down">
          <select>
            <option>SUITABLE FOR</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>

        <div className="drop-down">
          <select>
            <option>RAW MATERIALS</option>
            <option>All</option>
          </select>
        </div>
        <hr className="hrline"/>

        <div className="drop-down">
          <select>
            <option>PATTERN</option>
            <option>All</option>
          </select>
        </div>
          
      
        </div>      
      <ul className="product-list">
        {productsData.map(item => (
          <li key={item.id} className="product-item">
            <div className="product-container">
              <img src={item.image} className='product-image'/>
              <h1 className="product-name">{item.title}</h1>
              <div className="text-and-icon">
              <p className="product-details">Sign in or  Create an Account to see pricing</p>
              <FaRegHeart className="heart-icon" /> 
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchingData