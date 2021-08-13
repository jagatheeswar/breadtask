import React from "react";
import profilepic from "../images/profilepic.png"
import Profileabout from "../components/Profileabout"
function Profile(){
    return(
    
<div id="forwhiteborder">
        <div id="profile">
        <table style={{width:'100%'}}>
  <tr>
  <td  id="tdone" >
      <img src ={profilepic } />
      </td>
<td id="tdtwo">
  <div id="tdtwodiv">
    <p className="yoga" id="generalbuttons">Yoga</p>
    <p className="wellness" id="generalbuttons"> Wellness</p>
    </div>
    <p id="fitness" className="fitness" id="generalbuttons">Fitness</p>
    
<div className="togglediv">
<hr></hr>
    <span  className="pr-2 pl-2 ml-1 pb-2 pt-1" id="booktrail" id="generalbuttons">Book Trail</span>
    <span  className="pr-2 pl-2 ml-1 pb-2 pt-1 bigbuttons" id="contactmee">Contact me</span>
    </div>
  </td>
  
  <td id="tdthree" >
        <div >
    <p  className="my-3 pt-2 bigbuttons">Book Trail</p>
    <p  className="pt-2 ptwo bigbuttons">Contact me</p>
    </div>
  </td>
  </tr>
  
  
</table>
<Profileabout />
<div id="subscribe" >
  <p className="text-lg" style={{fontSize:'20px'}}>Subscribe to my profile and never miss another update from me.</p>
   <div class="form-group">
    
    <input type="password" id="emailinput" placeholder="Enter your Email" />
    <input type="submit" class=" btn ml-4" id="subscribebtn" value="Subscribe" />
    
  </div>
</div>
            </div>
        
            </div>
          
          
    )
}

export default Profile;
