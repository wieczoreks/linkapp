import React from 'react';
import Header from "./Header/Header";
import Refresh from "./Refresh/Refresh"

const Sidebar = (props) => {

return (

<div className="side">
        <Header
        handleChange={props.handleChange}
        handleSearch={props.handleSearch}
        newTodo={props.newTodo}
        editing = {props.editing}
        updateTodo = {props.updateTodo}
        addTodo = {props.addTodo}
        searchEntry={props.searchEntry}
       
        />                    
        <Refresh 
        checkallPages={props.checkallPages}
         />
</div>

);
}
 
export default Sidebar;