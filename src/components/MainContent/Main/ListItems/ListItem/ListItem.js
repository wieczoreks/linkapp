import React from 'react';


const ListItem = (props) => {
 let tvalue = ''
  if(props.item.tvalue>=83){
    tvalue = "NOT BLANK" 
 }
 else if(props.item.tvalue==='0'){
  tvalue = "CHECK" 
 }else{
  tvalue = "BLANK" 
 }

  return (
    
  <li className="Item grow">
    <a className="f6 fw6 db black link dim" href={props.item.link}>{props.item.link}</a>
    <div style={{padding:"4px"}}>
      <button className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-blue">{tvalue}</button>
      <button
        className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-red" style={{color:"#ff000f"}}
        onClick = {props.deleteTodo}
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
