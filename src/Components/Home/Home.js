import React from "react";
import "./Home.css";
// import { Link } from 'react-router-dom';

const Home = () => {
    const handlebtn=()=>
        {

          window.open("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=152&ct=1716835471&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26state%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL293YS8%26RpsCsrfState%3d3b65c68e-d707-1c85-a480-5015eff72c07&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015")

        }
  return (
    <>
      <div className="maincontainer">
      {/* <Link to="/About">About</Link> */}
        <img src="../../../images/Home.png" />
        <div className="innercontainer">

          <div>
            <p>I'm Kainat<br/> Rasheed, here<br/> to assist you.</p>
          </div>

          <div className="homebutton">
            <button onClick={handlebtn}  className="Homebtn">Contact me</button>
          </div>
 
        </div>
      </div>
    </>
  );
};

export default Home;
