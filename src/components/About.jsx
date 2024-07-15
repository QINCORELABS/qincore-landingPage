import axios from 'axios'
import React, { useState } from 'react'

function About() {
const [mail,setMail]=useState("")

  const service= import.meta.env.VITE_SERVICE_ID
  const template= import.meta.env.VITE_TEMPLATE_ID
  const public_id = import.meta.env.VITE_PUBLIC_KEY

  const data = {
    service_id: service,
    template_id: template,
    user_id: public_id,
    template_params: {
      to_name:"Qincore",
      message:mail
    }
  };

  const handleSubmit=async()=>{
   if(mail){
    try{
      const result= await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
      console.log(result);
      if(result.status==200){
        alert("Thank You !!")
        
        setMail("")
      }
    }catch(err){
      console.log(err);
    }
  }else(
    alert("Please enter email and press subscribe...")
  )
   
  }
  return (
    <>
    <div id='about' style={{background:"#D9D9D9",height:"80vh"}} className="container-fluid">
        <div style={{color:"#000"}} className="d-flex flex-column justify-content-center align-items-center ">
           <div style={{width:"50%"}} className='mt-5 d-flex align-items-center justify-items-center flex-column'>
                <p style={{color:"#000",fontSize:"30px"}} className=''> About Qincore</p>
                <p style={{color:"#000",textAlign:"center"}}>We are fully fledged into all the sources of comprehensive IT solutions in HR, IT  Development, Digital Marketing, Cybersecurity, and Edutech. </p>

                <h6 className='mt-3' style={{color:"#000"}}>Subscribe for Updates</h6>
                <div className='d-flex flex-wrap gap-3 mt-2 w-75 justify-content-center'>
                    <input value={mail} onChange={(e)=>setMail(e.target.value)} className='w-75 border-2 p-2' type="email" placeholder='Enter Your Email' />
                    <button onClick={handleSubmit} className='btn btn-secondary'>Subscribe</button>
                </div>
                <div className="d-flex gap-4 mt-4 justify-content-center">
                
              
                {/* facebook */}
                <a style={{textDecoration:"none",color:"#1E1E1E"}} href='https://www.facebook.com/qincorelab/' target='_blank'>  <div style={{width:"50px",height:"50px"}} className='social rounded-circle border-2 d-flex align-items-center justify-content-center'><i class="fa-brands fa-facebook"></i></div></a>
                 {/* linkdin */}
               <a style={{textDecoration:"none",color:"#1E1E1E"}}  href='https://www.linkedin.com/company/qincore/' target='_blank'> <div style={{width:"50px",height:"50px"}} className='social rounded-circle border-2 d-flex align-items-center justify-content-center'>  <i class="fa-brands fa-linkedin-in"></i></div></a>
                    
                    {/*instagram  */}
                <a style={{textDecoration:"none",color:"#1E1E1E"}} href='https://www.instagram.com/qincorelabs/' target='_blank'>  <div style={{width:"50px",height:"50px"}} className='social rounded-circle border-2 d-flex align-items-center justify-content-center'><i class="fa-brands fa-instagram"></i></div></a>
                 
                </div>
              <a href='#main'>  <button className='uparrow mt-5 mb-4' ><i class="fa-solid fa-arrow-up-long"></i></button></a>
                
           </div>
           <span>Copyright © 2023 QInCore labs Pvt. Ltd.</span>
        </div>
    </div>
    
    </>
  )
}

export default About