import React from "react";


import "../styles/Navbar.css"
import "../styles/Poster.css"
import "../styles/Profile.css"
import "../styles/Profileabout.css"
import "../styles/Slider.css"
import "../styles/Footer.css"
import scrollback from "../javascript/scrollbackward";
import scrollfront from "../javascript/scrollforward";
import Navbarr from "../components/Navbarr";
import Profile from "../components/Profile";
import Linebreak from "../components/linebreak";

import videotwo from "../images/shilpathree.jpeg"
import yogaone from "../images/yogaone.png"
import yogatwo from "../images/yogatwo.png"
import yogathree from "../images/yogathree.jpg"
import Slider from "../components/Slider";
import Footer from "../components/Footer";
function HomePage(){
    return(
        <div className="maincontainer">
            
            <Navbarr />
            <Profile />
        <Linebreak />        
            <div id="slider">

                <div id="containerdiv">
                <h1>BROWSE ALL MY OFFERINGS</h1>
                <br></br><br></br><br></br>
                <div className="flexcontainer" id="scrolling">
               
                <Slider image={yogathree} desc={"Friday - Online class Aug 8, 9:00 AM to 11:00 AM IST"} />
                <Slider image={yogaone} desc={"Saturday - Online class Aug 9, 9:00 AM to 11:00 AM IST"} />
                <Slider image={yogatwo} desc={"Sunday - Online class Aug 10, 9:00 AM to 11:00 AM IST"} />
                <Slider image={videotwo} desc={"Monday - Online class Aug 11, 9:00 AM to 11:00 AM IST"} />
                <Slider image={yogaone} desc={"Tuesday - Online class Aug 12, 9:00 AM to 11:00 AM IST"} />
                </div>

                <p className="mt-5" style={{textAlign:"center"}}><span style={{border:'2px solid white',borderRadius:'50%',paddingRight:'8px',paddingLeft:'8px',paddingTop:'4px',paddingBottom:'4px'}} className="arrow" onClick={scrollfront}><i className="fa fa-arrow-right"></i></span>&nbsp;&nbsp;&nbsp;<span className="arrow" onClick={scrollback} style={{border:'2px solid white',borderRadius:'50%',paddingRight:'8px',paddingLeft:'8px',paddingTop:'4px',paddingBottom:'4px'}}><i className="fa fa-arrow-left"></i></span></p>
                
                <br></br><br></br><br></br>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;

