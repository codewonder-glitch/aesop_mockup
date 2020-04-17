import React,{Component} from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import debounce from 'lodash.debounce'
import ComponentSlider from "@kapost/react-component-slider";
const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

import gift from "./images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png";
import frag3 from './images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png'
import frag4 from './images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png'
import frag5 from './images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png'
import frag2 from './images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png'
import frag1 from './images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png';
class App extends Component{
constructor(props){
super(props)

this.state = {
 
  hasOverflow: false,
  canScrollLeft: false,
  canScrollRight: false
}

this.checkForOverflow = this.checkForOverflow.bind(this)
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    )

    this.container = null
  

}

checkForScrollPosition() {
  const { scrollLeft, scrollWidth, clientWidth } = this.container

  this.setState({
    canScrollLeft: scrollLeft > 0,
    canScrollRight: scrollLeft !== scrollWidth - clientWidth
  })
}

checkForOverflow() {
  const { scrollWidth, clientWidth } = this.container
  const hasOverflow = scrollWidth > clientWidth

  this.setState({ hasOverflow })
}

componentDidMount() {
  this.checkForOverflow()
  this.checkForScrollPosition()

  this.container.addEventListener(
    'scroll',
    this.debounceCheckForScrollPosition
  )
}
componentWillUnmount() {
  this.container.removeEventListener(
    'scroll',
    this.debounceCheckForScrollPosition
  )
  this.debounceCheckForOverflow.cancel()
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.items.length !== this.state.items.length) {
    this.checkForOverflow()
    this.checkForScrollPosition()
  }
}

scrollContainerBy(distance) {
  this.container.scrollBy({ left: distance, behavior: 'smooth' })
}

  render()
  {
  return (

    <div className="App">
     
     
     <div id="giftdiv">
     <p>
     Five mythical Gift kifts
    
     <img src={gift} id="giftimg"/>
     </p>
        <pre>crafted for gods,mortals, and muses alike,our new Gift kit</pre>
        <pre>collection makes for inspired gift giving this festive season</pre>
        <input type="button" className="topbtn" value="Explore seasonal Gift kits ->"/>
       </div>


      <Router>
        <div id="container">
        
          renderLeftArrow={renderLeftArrow}
          renderRightArrow={renderRightArrow}
        >
        <div className="link">
        <Link to="/home"><img src={frag1} className="linkimg"/></Link>
        <Route path="/home"><Comp /></Route>
        </div>

        <div className="link">
        <Link to="/home"><img src={frag2} className="linkimg"/></Link>
        <Route path="/home"><comp /></Route>
        </div>

        <div className="link">
        <Link to="/home"><img src={frag3} className="linkimg"/></Link>
        <Route path="/home"><comp /></Route>
        </div>

        <div className="link">
        <Link to="/home"><img src={frag4} className="linkimg"/></Link>
        <Route path="/home"><comp /></Route>
        </div>

        <div className="link">
        <Link to="/home"><img src={frag5} className="linkimg"/></Link>
        <Route path="/home"><comp /></Route>
      
        </div>
        <input type="button" className="btnleft" value="<"    onClick={() => {
                    this.scrollContainerBy(-200)
                  }}/>
        <input type="button" className="btnright" value=">"  onClick={() => {
                    this.scrollContainerBy(200)
                  }}/>
        </div>

      </Router>
     
      

 
      
    </div>
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

export default App;
