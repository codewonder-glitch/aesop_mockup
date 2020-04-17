import React, { useState } from 'react';
import Modal from 'react-modal';
import './Page1.css'
import homePage from '../images/Aesop-Homepage-Banner.jpg';
import deo from '../images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png';
import handBalm from '../images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import handWash from '../images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';
// import {  BrowserRouter as Router, Route, Link } from "react-router-dom";


function Page1() {
    const [modalIsOPen, setModalIsOpen] = useState(false);
        return (
            <React.Fragment>
            <div className="firstRow">
            
              {/* <a href="#" alt="link to " onClick={() => setModalIsOpen(true)}> */}
              <button className="buttonModal" onClick={() => setModalIsOpen(true)}>
              <h5>Complimentary standard shipping on all orders  +</h5>
              </button>       
              <div>
                 {/* <Modal isOpen={true}> */}
                 <Modal isOpen={modalIsOPen}>  <h3>Shipping fees and deilivery fees</h3>
                     <hr/>
                     <p><h3>Standard Shipping</h3> </p>
                     <p> Complimentary</p>  
                     <br/>
                     2-4 business days
                     <br/>
                     Order by December 16, 11:59PM EDT to ensure delivery by December 24
                     <hr/>
                     <h3>Next Day Shipping</h3>
                     $35
                     <br/>
                     Order by 12PM ET for delivery on the next working days<hr/>
                     <button onClick={()=> setModalIsOpen(false)}>Close</button>
                 </Modal> 
              </div >
            </div>
            {/* <div  className="background">

            </div> */}
            <div>
            <ul className="menuPosition">
                    <li> <a href="#shop">Shop </a> </li>
                    <li><a href="#">Read</a></li>
                    <li><a href="#">Stores</a></li>
                    <li><a href="#">Search</a></li>
                    <li style={{float:"right"}}><a href="#">Login</a></li>
                </ul> 
                 
                <h5>Formulations for skin, hair, home and body</h5>
                <h6>Create with sensory pleasure in mind</h6>
            <img className="imageBanner" src={homePage}  alt="Home Page" height="500px" width='100%'/>
               
             
            </div>        
           
            <div className="leftSideDiv">
                <div>
                    <h5>Aesop essentials</h5>
                    <br/>
                   
                    <h2> A selection of staples</h2>
                    <br/>

                    <p>From beloved formulations first created decades <br/>
                    agao to personal care necessites
                </p>
                </div>
                <div className="rightSideDiv">
                <div>
                    <img src={handWash} alt="hand wash"  height="400px" /> 
                    <h6>Resurrection Aromatique Hand Wash</h6>
                    <h6><em>Gentle cleansing for hard-working hands</em></h6>
                </div>

                <div>
                    <img src={handBalm} alt="hand balm"  height="400px" />
                    <h6>Resurrection Aromatique Hand Wash</h6>
                    <h6><em>Richly hydrating, greaseless finish</em></h6>
                </div>
                <div>
                    <img src={deo} alt="deodarant"  height="400px" />   
                    <h6>Deodarant </h6>
                    <h6><em>Woody, herbaceous, earthy aromatic</em></h6>
                </div>
                
                </div>
               
            </div>
            <hr color="lightgray"/>
            </React.Fragment>
        );
    }


export default Page1;

