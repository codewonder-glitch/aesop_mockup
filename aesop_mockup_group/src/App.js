import React,{Component} from 'react';
import './App.css';
// import Secondpage from './components/2ndpage'
import Page1 from './components/Page1';

//import gift from "./images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png";

class App extends Component{
constructor(props){
super(props)

}
  render()
  {
  return (
    <div className="App">
     
     
       
    {/* <Secondpage /> */}
     
      
      
      <Page1/>
    </div>
  );
  }
}

export default App;
