import React, { useState } from 'react'
import "../App.css"
import Footer from './Footer'

import Grid from './Grid'
import Middle from './Middle'


function Intro() {
  
 
  const [email,setEmail]=useState("")
  const [error,setError]=useState();
  const handleChange=(e)=>{
  
  const {value}=e.target
  setEmail(value)
  
  
  }
  const handleSubmit=(e)=>{
  e.preventDefault();
  setError(validate(email))
  
  }
  
  
  
  const validate=(value)=>{
  let errors={}
  const regex= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const result=regex.test(value)
  if(!value){
    errors="Email is required"
  }
  else if(result === true){
    return null
  }
  else{
    errors="Please enter correct email"
  }
  return errors
  
  }
return (

<>
  <div className="intro-container">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="shape-fill" fill="#1C2431" fillOpacity="1"></path>
    </svg>
    <div className='main-section'>

      <h1>All your files in one secure
        location, accessible anywhere.</h1>
      <p>Fylo stores all your most important files in one secure
        location. Access them wherever you need, share and
        collaborate with friends family, and co-workers.</p>



      <button type="submit" onClick={(e)=>{e.preventDefault()}}id="startBtn">Get Started</button>
    </div>
    <Grid/>
    <Middle/>
  
    <div className='bottom-section'>
      <h3>Get early access today</h3>
      <p>It only takes a minute to sign up and our free Started tier
        is extremely generous. If you have any questions, our support team would be happy to help you.
 
      </p>
      <form>
      <input type="email" value={email} onChange={handleChange} id="email" placeholder="email@example.com"/>
      <p id="alert" style={{color:"red"}}>{error}</p>
      <button id="btn" onClick={handleSubmit}  type="submit">Get Started For Free</button>
      </form>
      
    </div>
    <Footer/>
    </div>
</>
)
}

export default Intro