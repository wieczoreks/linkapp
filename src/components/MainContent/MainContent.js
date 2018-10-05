import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import PageList from "./Main/ListItems/PageList";

const MainContent = (props) => {
 
return (
<div className="row">
                    <Sidebar
                    handleChange={props.handleChange}
                    handleSearch={props.handleSearch}
                    newTodo={props.newTodo}
                    editing = {props.editing}
                    updateTodo = {props.updateTodo}
                    addTodo = {props.addTodo}
                    searchEntry={props.searchEntry}
                     />

                    <Main 
                    editing={props.editing} 
                    loading={props.loading}>
                          <PageList
                            todos={props.todos}
                            editTodo={props.editTodo} 
                            deleteTodo={props.deleteTodo}
                            />
                    </Main>
                  </div>
);
}
 
export default MainContent;