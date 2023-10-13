import React from 'react';

// Scroll is not a self closing tag. It wraps the cardlist, so here the cardlist is a children.

const Scroll = (props) => {
    return (
        <div style ={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {/* in JSX I can style using {}, and in-between I can have css styles (CSS --> JSX: overflow-y --> overflowY*/}
            {props.children}  
            {/* props.children --> to render the scroll children (in this case, it is cardlist) */}
        </div>
    );
};

export default Scroll;