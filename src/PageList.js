import React from 'react';
import ListItem from './ListItem';

const PageList = (props) => {


      
return (
<div>
    <ul className="list-group">
              {props.todos.map((item, index) => {
                return <ListItem
                  key={item.id}
                  item={item}
                  editTodo={()=>props.editTodo(index)}
                  deleteTodo={()=>props.deleteTodo(index)}
                />;
              })}
    </ul>
</div>
);
}
 
export default PageList;