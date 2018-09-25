import React from 'react';
 
const SearchBox = (props) => {
 
return (

 <input 
    className="my-4 form-control" 
    type="search" 
    name="search"
    placeholder="Search page"
    onChange={props.handleSearch}
    value={props.searchEntry}
 />

);
}
 
export default SearchBox;