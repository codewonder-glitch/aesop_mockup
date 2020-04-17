import React,{Component} from 'react';
import './3rdpage.css';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import gift from "../images/Store-Detail-US-Wynwood-Hero-1-Desktop-2880x1620.jpg";
import frag5 from '../images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png'
import frag4 from '../images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png'
import frag3 from '../images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png'
import frag2 from '../images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png'
import frag1 from '../images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png';
export default function Thirdpage(){


    return(

    
        <div>
     
     
        <div id="gift3div">
        <p>
        Five mythical Gift kifts
       
        <img src={gift} id="gift3img"/>
        </p>
           <pre>crafted for gods,mortals, and muses alike,our new Gift kit</pre>
           <pre>collection makes for inspired gift giving this festive season</pre>
           <input type="button" className="topbtn3" value="Explore seasonal Gift kits ->"/>
          </div>
   
   
         <Router>
           <div id="container3">
           
           <div id="desc3">
           <h6>Fragrance</h6>
           <br/>
            <pre>An Aromatic signature</pre>
            <pre>our bold sophisticated fragrance-from parfum</pre>
            <pre>and eau-de parfum to room spraya are</pre>
            <pre>maliciously crafted using high quality ingredients</pre>
            </div>
          
           <div className="link3">
           <Link to="/home"><img src={frag1} className="link3img"/></Link>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link3">
           <Link to="/home"><img src={frag2} className="link3img"/></Link>
           <Route path="/home"><comp /></Route>
           </div>
   
           <div className="link3">
           <Link to="/home"><img src={frag3} className="link3img"/></Link>
           <Route path="/home"><comp /></Route>
           </div>
   
           <div className="link3">
           <Link to="/home"><img src={frag4} className="link3img"/></Link>
           <Route path="/home"><comp /></Route>
           </div>
   
           <div className="link3">
           <Link to="/home"><img src={frag5} className="link3img"/></Link>
           <Route path="/home"><comp /></Route>
         
           </div>
           <input type="button" className="btnleft3" value="<" />
           <input type="button" className="btnright3" value=">" />
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
   