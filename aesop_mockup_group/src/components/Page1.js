import React, { useState } from 'react';
import Modal from 'react-modal';
import './Page1.css'
import homePage from '../images/Aesop-Homepage-Banner.jpg';
import deo from '../images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png';
import handBalm from '../images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import handWash from '../images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';


function Page1() {
    const [modalIsOPen, setModalIsOpen] = useState(false);
        return (
            <React.Fragment>
            <div className="firstRow">
            
              {/* <a href="#" alt="link to " onClick={() => setModalIsOpen(true)}> */}
              <button className="buttonModal" onClick={() => setModalIsOpen(true)}>
              <h6>Complimentary standard shipping on all orders  +</h6>
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
                 </Modal> 
              </div>
            </div>
            <div>
              <img className="imageBanner" src={homePage}  alt="Home Page" height="500px"/>
            </div>        
           
            <div className="leftSideDiv">
                <div>
                    <h6>Aesop essentials</h6>
                    <br/>
                   
                    <h2> A selection of staples</h2>
                    <br/>

                    <p>From beloved formulations first created decades <br/>
                    agao to personal care necessites
                </p>
                </div>
                <div className="rightSideDiv">
                <div>
                    <img src={handWash} alt="hand wash"  height="200px" /> 
                    <h6>Resurrection Aromatique Hand Wash</h6>
                    <h6><em>Gentle cleansing for hard-working hands</em></h6>
                </div>

                <div>
                    <img src={handBalm} alt="hand balm"  height="200px" />
                    <h6>Resurrection Aromatique Hand Wash</h6>
                    <h6><em>Richly hydrating, greaseless finish</em></h6>
                </div>
                <div>
                    <img src={deo} alt="deodarant"  height="200px" />   
                    <h6>Deodarant </h6>
                    <h6><em>Woody, herbaceous, earthy aromatic</em></h6>
                </div>

                </div>
            </div>
            </React.Fragment>
        );
    }


export default Page1;

