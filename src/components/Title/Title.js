import React from 'react';
import Logo from "../Title/Logo/Logo"

const Title = (props) => {
 
return (
    <div className="header" style={{fontFamily: 'SEGA LOGO FONT',color:"white"}}>
        <div style={{padding: "5px"}}>{`Hello  ${props.userName}`}</div>
        <p style={{fontFamily: 'SEGA LOGO FONT',color:"red", padding: "5px"}}>PAGER</p>
        <Logo />
    </div>

);
}
 
export default Title;