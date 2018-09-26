import React from 'react';
import "./List.css";

const ListItem = (props) => {
  return <li className="list-group-item liClass bg-light-grey br3 ma2 grow">

    <a className="black" href={props.item.name}>{props.item.name}</a>
    <div><button
      className="btn-sm m-2 btn btn-danger grow"
      onClick={props.deleteTodo}
    >DELETE</button>
    <button
      className="btn-sm m-2 btn btn-info grow"
      onClick={props.editTodo}
    >UPDATE</button></div>
  </li>;
};

export default ListItem;
