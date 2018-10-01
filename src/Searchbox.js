import React from 'react';
 
const SearchBox = (props) => {
 
return (

 <input 
    className="mv2 form-control" 
    type="search" 
    name="search"
    placeholder="Search page"
    onChange={props.handleSearch}
    value={props.searchEntry}
 />

);
}
 
export default SearchBox;