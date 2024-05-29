import React from "react"
import "./Choose.css"

const Choose =()=>
    {

    return(

     <>
     
     <div className="maincontchoose">

         <img  className="imgchoose"src="../../../images/choosemain.png"/>
                 
          <div className="innercontchoose">

             <div className="left">
                <img className="innerimg"src="../../../images/chooseinner.png"/>
             </div>
             <div className="right">
                <div className="tick">
                    <img className="tickimg"src="https://euroshub.my.canva.site/kainat-rasheed/images/2ace510b512768a658f8c8feef2d26c3.svg"/>
                    <p className="tickpara">Proficient time management<br/> skills ensure timely delivery.</p>
                </div>
                <div className="tick">
                    <img className="tickimg"src="https://euroshub.my.canva.site/kainat-rasheed/images/2ace510b512768a658f8c8feef2d26c3.svg"/>
                    <p className="tickpara">Committed to client<br/>  satisfaction as the top priority.</p>
                </div>
                <div className="tick">
                    <img className="tickimg"src="https://euroshub.my.canva.site/kainat-rasheed/images/2ace510b512768a658f8c8feef2d26c3.svg"/>
                    <p className="tickpara">Prioritize client requirements to <br/>  exceed expectations.</p>
                </div>
             </div>


          </div>

     </div>
     
     </>

    )

    }
    export default Choose