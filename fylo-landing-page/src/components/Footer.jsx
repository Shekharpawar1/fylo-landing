import React from 'react'

function Footer() {
  return (
    <>
    <div className='footer'>
   
   <div className='contact-section'>
     <h2>Contact Us</h2>
     <div className="address">
     <i className="fa-solid fa-location-dot"></i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam libero ipsam modi labore in magni illo omnis, laborum nostrum est!
     </div>
     <div className="phone">
     <i className="fa fa-phone"></i>+1-546-123-4517
     </div>
     <div className="mail">
     <i className="fa-solid fa-envelope"></i>example@fylo.com
     </div>
</div>
     <div className="footer-menu">
        
          <ul className="menu-1">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
     

       <ul className="menu-2">
         <li>Contact Us</li>
         <li>Terms</li>
         <li>Privacy</li>

       </ul>
   
     <div className="social-brands">
     <i className="fa-brands fa-facebook"></i>
     <i className="fa-brands fa-twitter"></i>
     <i className="fa-brands fa-instagram"></i>

     </div>
    
     </div>
     

</div>
    </>
  )
}

export default Footer