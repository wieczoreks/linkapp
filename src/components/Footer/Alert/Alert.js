import React from 'react';
 
const Alert = (props) => {
 
return (
    <div>
        {props.notification &&
        <div className="alert mt-3 alert-success">
        <p className="text-center">{props.notification}</p>
        </div>}
    </div>
);
}
 
export default Alert;