import React from 'react';
import AuxComp from "../../AuxComp";
import Title from "../Title/Title";
import Navigation from "../Navigation/Navigation";
import MainContent from "../MainContent/MainContent";



const Layout = (props) => {
 
return (
<AuxComp>
    <Title userName={props.userName}/>
    <Navigation onRouteChange={props.onRouteChange}/>
    <MainContent />              
</AuxComp>
);
}
 
export default Layout;