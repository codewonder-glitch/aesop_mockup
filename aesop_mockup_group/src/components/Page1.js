import React, { Component } from 'react';
import homePage from '../images/Aesop-Homepage-Banner.jpg';
import deo from '../images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png';
import handBalm from '../images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import handWash from '../images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';

export default class Page1 extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="heading">
               <h6>Complimentary standard shipping on all orders  +</h6>
            </div>
            <div>
              <img className="imageBanner" src={homePage}  alt="Home Page" height="500px"/>
            </div>        
           
            <div className="div2">
                <div>
                    <h6>Aesop essentials</h6>
                    <br/>
                   
                    <h2> A selection of staples</h2>
                    <br/>

                    <p>From beloved formulations first created decades <br/>
                    agao to personal care necessites
                </p>
                </div>
                <div className="images2">
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
        )
    }
}

