import React from 'react';
import Tilt from 'react-tilt';
import earth from './earth.png';

const Logo = (props) => {
 
return (
    <div className="Logo">
    <Tilt  className="Tilt br2 shadow-2 pa2" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
        <div  className="Tilt-inner pa2"> <img style={{paddingTop:'3px'}} src={earth} alt="logo"/> </div>
    </Tilt>
    </div>

);
}
 
export default Logo;