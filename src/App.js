
import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from "./ParticleOptions.js";
import Layout from "./components/Layout/Layout"
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

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
 switch(this.state.route){
   case "home":
   pageContent  = <Layout onRouteChange={this.onRouteChange}/>;
   break;
   case "signin":
   pageContent = <Signin onRouteChange = {this.onRouteChange} />;
   break;
   case "register":
   pageContent = <Register onRouteChange = {this.onRouteChange} />;
   break;
   default:
   pageContent = <Signin onRouteChange = {this.onRouteChange} />;
 }
    


    return (
      <div className="App">
          <Particles className='particles' params={particlesOptions}/>
          {pageContent}
      </div>    
    );
  }
}

export default App;
