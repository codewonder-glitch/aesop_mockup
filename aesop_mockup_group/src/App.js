import React,{Component} from 'react';
import './App.css';

import Page1 from './components/Page1';
import Secondpage from './components/2ndpage'


import Fourthpage from './components/Fourthpage.js';
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
     
      <Fourthpage />
    


      

    </div>
  );
  
}

export default App;
