import React from 'react';
import Logo from "../Title/Logo/Logo"

const Title = (props) => {
 
return (
    <div className="header">
        <div 
        style={{padding: "5px"}}>
            Hello
            <span>{`${props.userName}`}
            </span></div>
        <Logo />
    </div>

);
}
 
export default Title;