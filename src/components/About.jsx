import React from 'react'

function About() {
  return (
    <>
    <div id='about' style={{background:"#D9D9D9",height:"80vh"}} className="container-fluid">
        <div style={{color:"#000"}} className="d-flex justify-content-center align-items-center ">
           <div style={{width:"50%"}} className='mt-5 d-flex align-items-center justify-items-center flex-column'>
                <p style={{color:"#000",fontSize:"30px"}} className=''> About Qincore</p>
                <p style={{color:"#000",textAlign:"center"}}>We are fully fledged into all the sources of comprehensive IT solutions in HR, IT  Development, Digital Marketing, Cybersecurity, and Edutech. </p>

                <h6 className='mt-3' style={{color:"#000"}}>Subscribe for Updates</h6>
                <div className='d-flex flex-wrap gap-3 mt-2 w-75 justify-content-center'>
                    <input className='w-50 border-2 p-2' type="text" placeholder='Enter Your Email' />
                    <button className='btn btn-secondary'>Subscribe</button>
                </div>
                <div className="d-flex gap-4 mt-4 justify-content-center">
                
              
                
                  <div style={{width:"50px",height:"50px"}} className='social rounded-circle border-2 d-flex align-items-center justify-content-center'><i class="fa-brands fa-facebook"></i></div>
                  <div style={{width:"50px",height:"50px"}} className='social rounded-circle border-2 d-flex align-items-center justify-content-center'>  <i class="fa-brands fa-linkedin-in"></i></div>
                  <div style={{width:"50px",height:"50px"}} className='social rounded-circle border-2 d-flex align-items-center justify-content-center'><i class="fa-brands fa-instagram"></i></div>
                 
                </div>
              <a href='#main'>  <button className='uparrow mt-5 mb-4' ><i class="fa-solid fa-arrow-up-long"></i></button></a>
                <span>Copyright © 2023 QInCore labs Pvt. Ltd.</span>
           </div>
        </div>
    </div>
    
    </>
  )
}

export default About