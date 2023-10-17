import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

function App () {
    // array destructuring (allows to name our state wathever we want)
    const [robots, setRobots] = useState([]) // initial state: []. setRobots is a function that changes the state of robots.
    const [searchfield, setSearchfield] = useState('') //initial state: ''
    const [count, setCount] = useState(0) 
   
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users') 
            .then(response => response.json())
            .then(users => {setRobots(users)});
            console.log(count)
    }, [count]) 
    //useEffect runs everytime the app renders - in this case, since we are using state inside useEffect, it's necessary to give an optional list to avoid continued render - solutions: 1) add empty array (componentDidMount shortcut - only fetch once); 2) add [count] (only run if count changes).

    const onSearchChange = (event) => {
        setSearchfield (event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
         <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <button onClick={() => setCount(count+1)}>Click me!</button>
                <SearchBox searchChange={onSearchChange}/> 
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/> 
                    </ErrorBoundary>
                </Scroll>                
            </div>
        );   
}

export default App;