import React from 'react';
import ListItem from './ListItem/ListItem';
import "./PageList.css";


const PageList = (props) => {


  const  list = props.todos.map((item, index) => {
  
    return <ListItem
      key={item.id}
      item={item}
      editTodo={()=>props.editTodo(item)}
      deleteTodo={()=>props.deleteTodo(item)}
    />;
    
  })

return (

    <ul className="w-90">
              {list}
    </ul>

);
}
 
export default PageList;