import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './2ndpage.css';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";

import gift from "../images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png";
import frag3 from '../images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png'
import frag4 from '../images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png'
import frag5 from '../images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png'
import frag2 from '../images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png'
import frag1 from '../images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png';

export default class Secondpage extends Component{
    constructor(props){
        super(props);
this.plusSlides=this.plusSlides.bind(this);
     this.slideIndex = 1;
    }
    componentDidMount(){
        //this.showSlides(this.slideIndex);
    }


// Next/previous controls
  plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
  currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n) {
//   var i;
//   var slides =  React.findDOMNode(this.refs.myTextInput).value;
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {this.slideIndex = 1}
//   if (n < 1) {this.slideIndex = slides.length}
//   console.log("slideindex is",slides.length);
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[this.slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}
render(){
    return(

    
        <React.Fragment>
     
     <div>
        <div id="giftdiv">
        <p>
        Five mythical Gift kifts
       
        <img src={gift} id="giftimg" alt="fragrance"/>
        </p>
           <pre>crafted for gods,mortals, and muses alike,our new Gift kit</pre>
           <pre>collection makes for inspired gift giving this festive season</pre>
           <input type="button" className="topbtn" value="Explore seasonal Gift kits ->"/>
          </div>
   
   
         <Router>
         
           <div id="container">
           

          
           <div id="link fade">
           <h6>Fragrance</h6>
           <br/>
            <pre>An Aromatic signature</pre>
            <pre>our bold sophisticated fragrance-from parfum</pre>
            <pre>and eau-de parfum to room spraya are</pre>
            <pre>maliciously crafted using high quality ingredients</pre>
            </div>
          
           <div className="link fade"  ref="myTextInput">
           <Link to="/home"><img src={frag1} className="linkimg" alt="fragrance"/>
           <h6>Resurrection Aromatique Hand Wash</h6>
            </Link><pre>Gentle cleansing for hard-working hands</pre>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link fade"  ref="myTextInput">
           <Link to="/home"><img src={frag2} className="linkimg" alt="fragrance"/>
           <h6>Resurrection Aromatique Hand Wash</h6>
            </Link><pre>Gentle cleansing for hard-working hands</pre>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link fade"  ref="myTextInput">
           <Link to="/home"><img src={frag3} className="linkimg" alt="fragrance"/>
           <h6>Resurrection Aromatique Hand Wash</h6>
            </Link><pre>Gentle cleansing for hard-working hands</pre>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link fade"  ref="myTextInput">
           <Link to="/home"><img src={frag4} className="linkimg" alt="fragrance"/>
           <h6>Resurrection Aromatique Hand Wash</h6>
            </Link><pre>Gentle cleansing for hard-working hands</pre>
           <Route path="/home"><Comp /></Route>
           </div>
   
           <div className="link fade"  ref="myTextInput">
           <Link to="/home"><img src={frag5} className="linkimg" alt="fragrance"/>
           <h6>Resurrection Aromatique Hand Wash</h6>
            </Link><pre>Gentle cleansing for hard-working hands</pre>
           <Route path="/home"><Comp /></Route>
         
           </div>
           <input type="button" onclick={this.plusSlides(-1)} className="btnleft" value="<" />
           <input type="button" onclick={this.plusSlides(-1)}className="btnright" value=">" />
           </div>
   
         </Router>
        
       
         </div>
         <hr id='hr2' color="lightgray"/>
   </React.Fragment>
         
        
     );
     }
    }
    
   
   
   function Comp(){
   
       return(
   <div>
   <h1>"Hello" </h1>
   </div>
   
       );
   }
   