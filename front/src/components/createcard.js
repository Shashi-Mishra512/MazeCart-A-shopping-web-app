import React from 'react'
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './createcard.css';

const Createcard = () => {

    const [ProductName, setProductName] = useState('');
    const [ProductPrice, setProductPrice] = useState(0);
    const [ProductUrl, setProductUrl] = useState('');
    
    const addProduct = () => {
        axios.post('http://localhost:3001/create', {ProductName: ProductName, ProductPrice: ProductPrice, ProductUrl: ProductUrl}).then(res => {
            console.log(res);
            setProductName('');
            setProductPrice(0);
            setProductUrl('');
        }).catch(err => {
            console.log(err);
        })
        
    };
    const notify = () => toast.success("Product Added Successfully 🚀🚀 ");
   
    
  return (
  
    <div className='create'>
        <div className='create-card'>
            <div className='create-card-header'>Create Product</div>
            <div className='create-card-body'>
                <div className='create-card-body-input'>
        <label>Input Name of Product</label>
        <input type="text"  onChange={(event) => {
            setProductName(event.target.value)
        }}/>
        </div>
        <div className='create-card-body-input'>
        <label>Input Price of Product</label>
        <input type="number"  onChange={(event) => {
            setProductPrice(event.target.value)
        }} />
        </div>
        <div className='create-card-body-input'>
        <label>Paste Link of Product Image</label>
        <input type="text"  onChange={(event) => {
            setProductUrl(event.target.value)
        }} />
        </div>
        
        <button onClick={()=> {
            addProduct();
            notify();
        }}>Create Product</button>
        <ToastContainer/>
    </div>
    </div>
  </div>
  )
}

export default Createcard