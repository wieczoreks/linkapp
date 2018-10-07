import React from 'react';
 
const Alert = (props) => {
 
return (
    <div className="Alert">
        {props.notification &&
        <div>
        <p className="text-center">{props.notification}</p>
        </div>}
    </div>
);
}
 
export default Alert;