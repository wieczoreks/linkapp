
import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from "./ParticleOptions.js";
import Layout from "./components/Layout/Layout"
import Signin from "./components/Signin/Signin";

class App extends Component {
  constructor() {
    super();
      this.state={
        route:'sigin'
    }
  }

onRouteChange = () => {
    this.setState({route:"home"})
}

  render() {
 
   

    return (
      <div className="App">
           <Particles className='particles' params={particlesOptions}/>
          {this.state.route==="sigin" ? 
            <Signin onRouteChange = {this.onRouteChange} />
          :<Layout />
           
             

          }
      </div>    
    );
  }
}

export default App;
