import React from "react";
import './footer.css';

 class FooterPage extends React.Component{
   render(){
     return(
    <div>
      <footer className="footer">
       <div className="footer-content">
       <div className="footer-section"></div>
       <div className="footer-section"></div>
       <div className="footer-section text">
         <h4> Left Footer Links</h4>
         <h6> Left Footer Link ONE</h6>
         <h6> Left Footer Link TWO</h6>
         
        </div>
        <div className="footer-section text">
        <h4> Left Footer Links</h4>
        <h6> Left Footer Link ONE</h6>
         <h6> Left Footer Link TWO</h6>
        </div>
        <div className="footer-section"></div>
        <div className="footer-section"></div>
       </div>
      </footer>
    </div>
       );
   }
 }

export default FooterPage;