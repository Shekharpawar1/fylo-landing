import React from 'react'

function Middle() {
  return (
    <>
     <div className='middle-section'>
      <img id="stay" src="./images/illustration-stay-productive.png" />
      <h2> Stay productive, wherever you are</h2>


      <p className='top-para'> Never let location be an issue when accessing your files.
        Fylo has you covered for all your files storage needs.
      </p>

      <p className='bottom-para'>
        Securely share files and folders with friends, family and colleagues
        for live collaboration. No email attachments required.

      </p>

      <a href="#"> See how Fylo works <i className="fa-solid fa-arrow-right"></i> </a>

    </div>
    <div className='testimonial-grid-container'>

      <div className='col-1'>

        <img id="bg-quote" src="./images/bg-quotes.png" />
        <p>Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become well-oiled
          collaboration machine.</p>
        <div className="sub-grid">
          <img src="./images/profile-1.jpg" />
          <div className='namePosition'>
            <h3>satish patel</h3>
            <h4>Founder & CEO, Huddle</h4>

          </div>

        </div>




      </div>
      <div className="col-2">

        <p>Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become well-oiled
          collaboration machine.</p>
        <div className="sub-grid">
          <img src="./images/profile-2.jpg" />
          <h3>Bruce McKenzie</h3>
          <h4>Founder & CEO, Huddle</h4>
        </div>


      </div>
      <div className="col-3">
        <p>Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become well-oiled
          collaboration machine.</p>
        <div className="sub-grid">
          <img src="./images/profile-3.jpg" />
          <h3>Iva Boyd</h3>
          <h4>Founder & CEO, Huddle</h4>
        </div>



      </div>
    </div>
    
    </>
  )
}

export default Middle