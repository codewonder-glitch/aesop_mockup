import React,{Component} from 'react';
import './3rdpage.css';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import gift from "../images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png";
import frag3 from '../images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png'
import frag4 from '../images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png'
import frag5 from '../images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png'
import frag2 from '../images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png'
import frag1 from '../images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png';

export default function Secondpage(){


    return(

    
        <div>
     
     
        <div id="giftdiv">
        <p>
        Five mythical Gift kifts
       
        <img src={gift} id="giftimg"/>
        </p>
           <pre>crafted for gods,mortals, and muses alike,our new Gift kit</pre>
           <pre>collection makes for inspired gift giving this festive season</pre>
           <input type="button" className="topbtn" value="Explore seasonal Gift kits ->"/>
          </div>
   
   
         <Router>
           <div id="container">
           
          
           <div className="link">
           <Link to="/home"><img src={frag1} className="linkimg"/></Link>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag2} className="linkimg"/></Link>
           <Route path="/home"><comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag3} className="linkimg"/></Link>
           <Route path="/home"><comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag4} className="linkimg"/></Link>
           <Route path="/home"><comp /></Route>
           </div>
   
           <div className="link">
           <Link to="/home"><img src={frag5} className="linkimg"/></Link>
           <Route path="/home"><comp /></Route>
         
           </div>
           <input type="button" className="btnleft" value="<" />
           <input type="button" className="btnright" value=">" />
           </div>
   
         </Router>
        
         </div>
   
    
         
       
     );
     }
   
   
   function Comp(){
   
       return(
   <div>
   <h1>"Hello" </h1>
   </div>
   
       );
   }
   