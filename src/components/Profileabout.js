import React from "react";
import yt from "../images/youtube.svg"
import insta from "../images/insta.svg"
import li from "../images/linked.svg"
import tw from "../images/twitter.svg"
import spotify from "../images/spotify.svg"
import spot from "../images/spot.svg"
import location from "../images/location.svg"
import speak from "../images/speak.svg"
import Body from "../components/body";

import Buttons from "../components/buttons"


function Profile(){
    return(
<>
<h1 className="name">jane doe</h1>
<p className="aboutpara">Hi, I am Jane Doe, your next door fitness instructor with just one goal - 
    Make people fit and healthy.Loren ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>

    <div id="icon">
    <img src={tw} width="18px" className="m-3" height ="19px" />
    <img src={li} width="18px" height ="19px" className="m-3" />
    <img src={yt} width="18px" height ="19px" className="m-3" />
    <img src={spotify} width="18px" height ="19px" className="m-3" />
    <img src={insta} width="18px" height ="19px" className="m-3" />
    <img src={spot} width="18px" height ="19px" className="m-3"  />
    </div>
    <div id="icon" className="ml-2">
        <br></br>
    <img src={location} width="18px" className="m-2" height="19px" /> 
    <span>Lives in</span><Buttons heading={'New delhi'} /> <br></br>
    
    </div>
    <div id="icon" className="ml-2">
        <br></br>
    <img src={speak} width="28px" className="m-2" height="29px" /> 
    <span>Lives in</span><Buttons heading={'English'} /> <Buttons heading={'Hindi'} /> <Buttons heading={'punjabi'}  /> <br></br>
    
    </div>
    <Body />
    
           </>
    )
}

export default Profile;
