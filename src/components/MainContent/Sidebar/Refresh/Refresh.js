import React from 'react';
 
const Refresh = (props) => {
 
return (
<div className="pa2 br3 ba b--black-10  w-100 w-100-m w-100-l shadow-5"> 
    <button
        onClick={props.checkallPages}
        className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib"
      >Refresh All</button>     
    </div>
);
}
 
export default Refresh;