import React from 'react';


const ListItem = (props) => {

  let tvalue = ''
  let img = ''
if(props.item.tvalue==='0' || props.item.img==='0'){
  tvalue = "REFRESH";
  img = "REFRESH" 
}else{
   tvalue = props.item.tvalue
   img = props.item.img
  }

  return (
    
  <li className="Item grow">
    <a 
    className="f6 fw6 db black link dim" href={props.item.link}>{props.item.link}</a>
    <div className="buttonWrapper">
    
      <button 
      className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-blue">{img}</button>
      <button 
      className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-blue"
      >
      {tvalue}
      </button>
      <button 
      className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-blue"
      onClick={props.refresh}>Update</button>
     
      <button
          className="f6 link dim br-pill ph3 pv2  dib white bg-transparent"
          onClick={props.editTodo}
        >Rename</button>
         <button
          className="f6 link dim br-pill ph3 pv2 mh2 dib bg-transparent dark-red" style={{color:"#ff000f"}}
          onClick = {props.deleteTodo}
        >Delete</button>
    </div>
  </li>
  );
};

export default ListItem;
