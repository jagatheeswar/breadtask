import React from "react";
import Poster from "./Poster";
function Navbarr(){
    return(
        <div id="posterdiv">
        <nav class="navbar navbar-expand-lg" id="navbar">
        <a style={{color:'white', textDecoration:'underline'}} class="navbar-brand" href="#">bre.ad/jane</a>
        <button class="navbar-toggler" id="navbutton" type="button" data-toggle="collapse" data-target="#navbardiv" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" id="togglebutton">≡</span>
        </button>
        <div class="collapse navbar-collapse" id="navbardiv" >
          <ul class="navbar-nav ml-auto" id="myul">
            <li class="nav-item active ml-5" style={{textAlign: "center"}}>
              <a class="nav-link" href="#">Offerings<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ml-5" style={{textAlign: "center"}}>
              <a class="nav-link" href="#">Other Links</a>
            </li>
            <li class="nav-item ml-5" id="liitem" style={{textAlign: "center"}}>
              <a class="nav-link" href="#">Testimonials</a>
            </li>
            <li class="nav-item ml-5" style={{textAlign: "center"}}>
              <a class="nav-link disabled" href="#">Portfolio</a>
            </li>
            
            <li class="nav-item ml-5" style={{textAlign: "center"}}>
              <a class="nav-link disabled" href="#">Contact me</a>
            </li>
            
            <li class="nav-item ml-5" id="navcustom" style={{textAlign: "center"}}>
              <a  id="navcustom" class="nav-link disabled" href="#">Book trail</a>
            </li>
            
            
          </ul>
        </div>
      </nav>
      <Poster />
            
      </div>
        
    )
}

export default Navbarr;