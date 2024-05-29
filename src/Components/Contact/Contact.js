import React from "react"
import "./Contact.css"

const Contact=()=>
    {
      const handleoutlook=()=>
         {

            window.open("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=152&ct=1716835471&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26state%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL293YS8%26RpsCsrfState%3d3b65c68e-d707-1c85-a480-5015eff72c07&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015")
         }

 return(

    <>
     <div className="maincontcontact">

        <img src="../../../images/choosemain.png"/>

        <div className="innercontcontact">
             <div className="leftcontact">
                <div className="box1">
                      <p style={{marginLeft:"40px"}}>Contact</p>
                      </div>
                      <div className="box2">
                       
                        <div className="picbox2" >
                          <img style={{marginLeft:"50px"}} src="https://euroshub.my.canva.site/kainat-rasheed/images/0f24259dff5b73e764fd5df5d90178d8.svg"/>
                          </div>
                           <p style={{marginLeft:"65px"}}>+92-300-036-9622</p>
                     
                      </div>
                      <div className="box3">
                        <div className="imgbox3">
                      <img style={{marginLeft:"50px"}} src=" https://euroshub.my.canva.site/kainat-rasheed/images/505507ece7ba6c57e7600fabd4022f66.svg"/>
                      </div>
                      <p onClick={handleoutlook}style={{marginLeft:"65px",cursor:"pointer"}}>euroshub@outlook.com</p>
                        </div>
             </div>
             <div className="rightcontact">
                <img src="https://euroshub.my.canva.site/kainat-rasheed/images/11e9ecefe84dbca039f322bd19a9bfde.png"/>
                </div>
        </div>
     </div>
    
    </>
 )


    }

export default Contact