import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {  
    const cardComponent = robots.map((user, i) => {
        return ( 
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                />
                // while using a loop (map), assign a key to each one (key prop). Aim: when one element is removed, React won't know which one of them was removed and thus it will load the entire DOM to adjust the cards.
                // React treats the key prop differently from other props. The key prop is a special attribute used by React to identify and manage individual elements in a list of components. It is not passed down as a regular prop to the component.
        );
    })
    
    return (
        <div>
            {cardComponent} 
            {/* everything between {} is JavaScript*/}
        </div>
    );
}

export default CardList; 