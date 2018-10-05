import React from 'react';


const ListItem = (props) => {
  return (
    
  <li className="Item grow">
    <a className="f6 fw6 db black link dim" href={props.item.name}>{props.item.name}</a>
    <div style={{padding:"4px"}}>
      <button
        className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-red" style={{color:"#ff000f"}}
        onClick={props.deleteTodo}
      >DELETE</button>
      <button
        className="f6 link dim br-pill ph3 pv2  dib white bg-transparent"
        onClick={props.editTodo}
      >UPDATE</button>
    </div>
  </li>
  );
};

export default ListItem;
