import React from 'react'
import logo from "../assets/logo.png"
import shade1 from "../assets/shade1.png"
import shade2 from "../assets/shade2.png"
import shade3 from "../assets/shade3.png"
import shade4 from "../assets/shade4.png"
import soonimg from "../assets/coming.png"
function ComingSoon() {
  return (
    <>
    <div id='main' style={{height:"100vh",position:"relative"}} className="container-fluid coming-soon">
        <div style={{width:"100%"}} className='d-flex justify-content-between align-items-center p-2'>
            <img src={logo} alt="" />
            <a href="#" style={{textDecoration:"none",color:"#DFDFDF"}}>CONTACT</a>
        </div>
         <div className="row">
            <div className="col-6"></div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-8 d-flex justify-content-center align-items-center ">
                        <img width={"90%"} className='img' src={shade1} alt="" />
                    </div>
                    <div className="col-lg-4 d-flex gap-2 flex-column ">
                        <img width={"70%"} className='img' src={shade2} alt="" />
                        <img  width={"70%"} className='img' src={shade3} alt="" />
                        <img  width={"70%"} className='img' src={shade4} alt="" />
                    </div>
                </div>
            </div>
         </div>
        <div className='soon' ><img className='img-fluid' src={soonimg} alt="" /></div>
       
            <a href='#about'><button className='arrow' ><i class="fa-solid fa-arrow-down-long tex"></i></button></a>
        
    </div>
    
    
    </>
  )

}

export default ComingSoon