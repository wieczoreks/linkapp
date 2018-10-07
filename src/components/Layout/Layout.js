import React from 'react';
import AuxComp from "../../AuxComp";
import Title from "../Title/Title";
import Navigation from "../Navigation/Navigation";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";


const Layout = (props) => {
 
return (
<AuxComp>
    <Title />
    <Navigation />
    <MainContent />              
    <Footer /> 
</AuxComp>
);
}
 
export default Layout;