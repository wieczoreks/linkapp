import React from 'react';



const Navigation = (props) => {
 
return (
  <div className="navbar shadow-2">
    <div onClick={() => props.onRouteChange("signin")} 
    >Sign Out</div>
    <div style={{color:"red"}}>PAGER</div>
    </div>

);
}
 
export default Navigation;