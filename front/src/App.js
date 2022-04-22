import Navbar from './components/navbar';
import Product from './components/product';
import Createcard from './components/createcard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './components/home';
import Readme from './components/readme';
import './App.css';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
     
  // }, []);


  return (
    <div>
<div className="App"></div>
<Navbar/>
   <Routes>
   <Route path="/" element={<Home />} />
  <Route path="/create" element={<Createcard/>}/>
  <Route path="/readme" element={<Readme/> }/>
  <Route component = {() => <h1>404 not found</h1>} />
  </Routes>
    
       </div>
    
  );
}

export default App;
