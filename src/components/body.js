import React from "react";
import Video from "../images/video.svg"
function Body(){
    return(
<div id="">
        <div className="bodyflex mt-5 ">
            <div id="videotext">
        <p>
        Check out my video about 30 min yoga for beginners
        </p>
        <p id="contactmeani">
        Contact me -&gt;
        </p>
            </div>
            <div id="video">
            <img src={Video} height="100%" width="100%" />
            </div>
            </div>
           </div>
    )
}
export default Body;
