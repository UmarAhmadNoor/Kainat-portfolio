import React from "react"
import "./About.css"

const About=()=>
    {
        return(

          <>
          
          <div className="maincontainerabout">
          <video autoPlay loop muted className="background-video">
          <source src="https://euroshub.my.canva.site/kainat-rasheed/videos/5adb992d89b053f25c484a0e980c370a.mp4" type="video/mp4" />
         
        </video>
            <div className="innercontabout">

                <div>
                    <h1 className="aboutheading">About me</h1>
                    
                </div>
                <div>
                    <p className="aboutpara">Hello there! I'm your skilled Virtual Assistant, ready to handle your administrative needs with precision. With expertise in data entry and lead generation, I ensure efficient operations and effective growth strategies. Let's streamline your tasks and propel your business forward together!

                   </p>
                </div>
            </div>

          </div>
          
          </>

        )
    }
    export default About