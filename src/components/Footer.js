    import React from "react";
    import bread from "../images/bread.svg"
            import "../styles/main.css"
            import yogaone from "../images/yogaone.png"
            
            function Footer(){
                return(
                    <div id="footer">
            <span id="rightss" className="hideone">Bread 2021 All rights reserved</span>
                <p id="powered">Powered by <img src={bread} height="88px" width="88px"/> </p>
                
                <p style={{paddingTop:'0px'}}>
                <i className="fa fa-instagram"></i> &nbsp;
                <i className="fa fa-facebook"></i>&nbsp;&nbsp;
                <i className="fa fa-twitter"></i>&nbsp;&nbsp;
                <i className="fa fa-linkedin"></i>&nbsp;
                <span style={{textAlign:'end',float:'right'}} className="lasthide">Terms &nbsp; Privacy &nbsp; About</span>
                </p>
                <span id="tpa" className="hids lasthid" style={{color:'white',paddingTop:'0px'}}>Terms &nbsp; Privacy &nbsp; About</span> 
                <span id="rights" className="hide text-lg" style={{fontSize:'20px'}}>Bread 2021 All rights reserved</span> 
                <br></br>
                
            </div> 
                
                )
            }
            
            export default Footer;
            
            