import React from 'react';

//import img4 from 'aesop_mockup/aesop_mockup_group/src/images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg';
import img4 from '../images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg';
import './Fourthpage.css'

function Fourthpage ()
{
    return(

        <div> 
             
                <p className="p1"> Architecture and design </p>
                <p className="p2">Spaces of distinction</p>
                
            <img className="i1" src = {img4} alt='Bleecker'/>
        </div>

    )
}


export default Fourthpage;