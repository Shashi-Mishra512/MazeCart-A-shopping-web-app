import React from 'react'
import { useEffect, useState } from 'react';
import Pimage from '../assests/schoolb.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Product = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/read')
   
    .then (res=> setData(res.data))
    
    }, []);
  
    // console.log(ListP.push(datas.data))
    const viewItems = ()=> {
      return(
        <>
        <div className='List'>
        {data.map((value) => {
          console.log(value, "val")
          return(
            
            <div className="Product-Container">
            <div className='pItems'>
  <img src={value.imgUrl} className='image' alt='schlbag'/>
  <div className='Pdetails'>
  <div className='Pname'>
    <h3>{value.name}</h3>
  </div>
  <div className='Price'>
    <p>{value.price}</p>
 </div>
 
 </div>
</div>

<div className="cartb">
<div>
<button className="acart">Add to Cart</button>
</div>
<div>
  <button className="rcart">Remove</button>
</div>
</div>
</div>

          )
        })}
        </div>
        </>
      )
    }
return (
    <>
    <div className='pContainer'>
      <div className='pHeader'>
        <h1>Product List</h1>
        </div>
  {viewItems()}
  </div>
 </>     
           
)}

export default Product;
