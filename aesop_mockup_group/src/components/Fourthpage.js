import React from 'react';

//import img4 from 'aesop_mockup/aesop_mockup_group/src/images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg';
import img4 from '../images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg';
import './Fourthpage.css'

function Fourthpage ()
{
    return(

        <div> 
             
                <p className="p1"> Architecture and design </p>
                <h4>Spaces of distinction</h4>
                
            <img className="i1" src = {img4} alt='Bleecker'/>
        </div>

    )
}


export default Fourthpage;