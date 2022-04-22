// eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../assests/search.png'
import themeSwitch from '../assests/theme-switch.png'

import './navbar.css'

const navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-container">
          <h2><Link to ="/">MazeCart</Link></h2>
            </div>

        
            <div className='searchBarContainer'>
           <div className='searchIconContainer'>
               <img src={searchIcon} />
           </div>
              <input className= 'searchInput' type='text' placeholder='Search Products ' />
        </div>
        
        <div className='HeaderItems'>
            <p><Link to ="/readme">Readme</Link></p>
            <p><Link to ="/create">Create</Link></p>
            </div>

        <div className='cart-btn'>
          <p>Cart</p>
        </div>

        <div className='headerActions'>
                 <div className='themeSwitchContainer'>
                     <img src={themeSwitch} />
                     </div>

         </div>

        </div>
        
  )
}

export default navbar;