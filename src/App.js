
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
        route:'signin'
    }
  }

onRouteChange = (route) => {
    this.setState({route:route})
}

  render() {
    let pageContent = null;

    if(this.state.route =="home"){
      pageContent  = <Layout onRouteChange={this.onRouteChange}/>
    }
    if(this.state.route === "signin")
      pageContent = <Signin onRouteChange = {this.onRouteChange} />
   

    return (
      <div className="App">
          <Particles className='particles' params={particlesOptions}/>
          {pageContent}
      </div>    
    );
  }
}

export default App;
