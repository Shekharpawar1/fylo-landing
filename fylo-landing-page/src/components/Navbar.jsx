import React from 'react'
import "../App.css"
function Navbar() {
  return (
    <>
    <div className="container">

        <div className='logo'>
            <img src="../images/logo.svg" alt="logo" />

        </div>
        <div className='navbar'>
        
            <ul className='navbar-list'>
              
              <li className="navbar-list-items">
                Features
              </li>
              <li className="navbar-list-items">Team</li>
              <li className="navbar-list-items">Sign In</li>

            </ul>
          </div>
        </div>
   
  
         <div className='intro'>
         <img  src="../images/illustration-intro.png" alt="intro image"/>     </div>
         </>
  )
}

export default Navbar