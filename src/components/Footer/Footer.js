import React from 'react';
import Alert from "./Alert/Alert";

const Footer = (props) => {
 
return (
<div className="footer shadow-2">
    <p>Notification box</p>
    <Alert notification ={props.notification} />
    
</div>
);
}
 
export default Footer;