import React,{Component} from 'react';
import './App.css';

import gift from "./images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png";

class App extends Component{
constructor(props){
super(props)

}cd 
  render()
  {
  return (
    <div className="App">
     <div id="giftdiv">
      <p>
     Five mythical Gift kifts
    
     <img src={gift} id="gift"/>
     </p>
        <pre>crafted for gods,mortals, and muses alike,our new Gift kit</pre>
        <pre>collection makes for inspired gift giving this festive season</pre>
        <input type="button" value="Explore seasonal Gift kits ->"/>
       
     
       
      </div>
     
      
      
    </div>
  );
  }
}

export default App;
