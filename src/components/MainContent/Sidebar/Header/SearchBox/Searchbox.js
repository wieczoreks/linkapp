import React from 'react';
 
const SearchBox = (props) => {
 
return (
<div className="pa2 mv3">

<label className="db fw6  f5" >SearchBox</label>
 <input 
    className="pa2 ba bg-transparent hover-bg-black hover-white w-100"
    type="search" 
    name="SearchBox"
    placeholder="Search page"
    onChange={props.handleSearch}
    value={props.searchEntry}
    
 />
</div>
);
}
 
export default SearchBox;