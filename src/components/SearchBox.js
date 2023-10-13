import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    //  ({ searchfield, searchChange }) --> object destructuring syntax (aim: take the props object that is passed to this component, and extract two specific properties from it: searchfield and searchChange).
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange} // everytime something is written in the search box, onChange event is triggered and it will call the searchChange function (which is passed as a prop to SearchBox component, in App.js). As searchChange={this.onSearchChange}, onSearchChange(event) gets runned).
            />
        </div>
    );
}

export default SearchBox;