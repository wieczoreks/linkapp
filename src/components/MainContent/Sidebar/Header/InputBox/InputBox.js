import React from 'react';
 
const InputBox = (props) => {
 
return (
<div className="mv1 pa2">
<label className="db fw6 lh-copy f5">InsertBox</label>
        
<input
        type="text"
        name="InsertBox"
        className="pa2  ba bg-transparent hover-bg-black hover-white w-100"
        placeholder="Add new page"
        onChange={props.handleChange}
        value={props.newTodo}
        />
</div>
);
}
 
export default InputBox;