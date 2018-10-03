import React from 'react';
import Title from '../Title/Title';
import SearchBox from "../SearchBox/Searchbox";
import InputBox from "../InputBox/InputBox"; 
import "./Header.css"

const Header = (props) => {
 
return (
  <div className="Header">
  <header className="pa3 br3 ba b--black-10 mv2 w-70 w-50-m w-25-l shadow-5">
    
      <Title />   
         
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
  </header>
</div>
);
}
 
export default Header;