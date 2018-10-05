import React from 'react';
import ListItem from './ListItem/ListItem';



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

    <ul className = "List shadow-2">
              {list}
    </ul>
  
);
}
 
export default PageList;