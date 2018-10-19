import React from 'react';
import loadingGif from '../../../loading5.gif';
import PageList from "./ListItems/PageList";

const Main = (props)=>  {

    
    return (
        <div className="main">
            {props.loading  ? <img src={loadingGif} alt="" />:props.editing ? null:
                <PageList 
                todos={props.todos} 
                editTodo={props.editTodo} 
                deleteTodo={props.deleteTodo}
                refresh = {props.refresh}
                
                 />}
        </div>
    );
}


 
export default Main;