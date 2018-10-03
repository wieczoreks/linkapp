import React from 'react';
import "./ListItem.css";

const ListItem = (props) => {
  return <li className="liClass grow ba">

    <a className="f5 fw6 db black link dim" href={props.item.name}>{props.item.name}</a>
    <div><button
      className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-red"
      onClick={props.deleteTodo}
    >DELETE</button>
    <button
      className="f6 grow br-pill ph3 pv2 mb2 dib white bg-dark-gray"
      onClick={props.editTodo}
    >UPDATE</button></div>
  </li>;
};

export default ListItem;
