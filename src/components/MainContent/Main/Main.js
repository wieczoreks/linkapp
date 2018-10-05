import React from 'react';
import loadingGif from '../../../loading.gif';

const Main = (props) => {
 
let content = null;
if(props.loading ){
    content = <img src={loadingGif} alt=""/>
}
if (!props.editing || props.loading){
    content = props.children
}

return (
    <div className="main">
    {content}
    </div>
);
}
 
export default Main;