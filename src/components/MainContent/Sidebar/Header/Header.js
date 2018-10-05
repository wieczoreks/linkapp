import React from 'react';
import SearchBox from "./SearchBox/Searchbox";
import InputBox from "./InputBox/InputBox"; 


const Header = (props) => {
 
return (
 
    <div className="Search br3 ba b--black-10  w-100 w-100-m w-100-l shadow-5"> 
      <SearchBox 
       handleSearch={props.handleSearch} 
       searchEntry={props.searchEntry}
      />
      <InputBox 
      handleChange={props.handleChange}
      newTodo ={props.newTodo}/>                          
      
      <button
      onClick={props.editing ? props.updateTodo : props.addTodo }
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
      >{props.editing?"Update page":"Add page"}</button>
    </div>

);
}
 
export default Header;