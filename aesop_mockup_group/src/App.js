import React,{Component} from 'react';
import './App.css';

import Page1 from './components/Page1';
import Secondpage from './components/2ndpage'

import Thirdpage from './components/3rdpage'

import Fourthpage from './components/Fourthpage.js';
import Fifthpage from  './components/Fifthpage.js';
import './App.css';


function App() {
  return (
    <div className="App">
     <div>
     <Page1 />
     </div>

     <div>
     <Secondpage />
    </div>

    <Thirdpage/>
     
      <Fourthpage />
      <Fifthpage />
    


      

    </div>
  );
  
}

export default App;
