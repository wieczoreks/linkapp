import React from 'react';
import ListItem from './ListItem/ListItem';



const PageList = (props) => {


  const  list = props.todos.map((item, index) => {
    return <ListItem
      key={item.pid}
      item={item}
      editTodo={()=>props.editTodo(item)}
      deleteTodo={()=>props.deleteTodo(item)}
    />; 
  })

return (

    <ul className = "List">
              {list}
    </ul>
  
);
}
 
export default PageList;