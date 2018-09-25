import React from 'react';
import "./List.css";

const ListItem = (props) => {
  return <li className="list-group-item liClass">

    {props.item.name}
    <div><button
      className="btn-sm ml-4 btn btn-danger"
      onClick={props.deleteTodo}
    >DELETE</button>
    <button
      className="btn-sm mr-4 btn btn-info"
      onClick={props.editTodo}
    >UPDATE</button></div>
  </li>;
};

export default ListItem;
