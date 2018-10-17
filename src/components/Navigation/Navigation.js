import React from 'react';



const Navigation = (props) => {
 
return (
  <div className="navbar shadow-2">
    <div style={{fontFamily: 'SEGA LOGO FONT'}}
      onClick={() => props.onRouteChange("signin")} 
    >Sign Out</div>
    </div>

);
}
 
export default Navigation;