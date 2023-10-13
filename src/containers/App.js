import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

// PROPS never change. Use STATE to make the search box info communicate with the cardlist (is able to change the value of the search box, cards, ..) (smart components).
// NOTE: A parent feeds STATE into child component, and as soon as child component receives the STATE, it's a PROP.

class App extends React.Component {
    constructor () {
       super() 
       this.state = { 
            robots: [],
            searchfield: '',
            }
            console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') 
            .then(response=> {
                return response.json();
        })
        .then(users => {
            this.setState({ robots: users}) // updating users
        });
    }

    onSearchChange = (event) => {
        this.setState ({searchfield: event.target.value}) // update the searchfield (state) to whatever we type (connection made in: <SearchBox searchChange={this.onSearchChange}/> ).
        //console.log(event.target.value);
    }

    render () {
            const { robots, searchfield } = this.state; 
            const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            // the array of robots (this.state.robots) is filtered based on the name property of each robot (in this case, the filtered array will include robots whose name includes specific strings (what is written in the searchfield (this.state.searchfield.toLowerCase())).
                //robot => { ... }: This is an arrow function used as the callback for the filter method. It receives each individual robot from the this.state.robots array one by one.
                //.includes(): This method checks if the lowercase name property of the robot object includes the lowercase searchfield. If it does, it returns true, indicating that this robot should be included in the filteredRobots array.
            console.log('render');

        // robots.length === 0 is the same as this: !robots.length
        if (robots.length === 0) {       
            return <h1> Loading </h1>
        } else {
            return (
               <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    {/* 'f1' comes from tachyons and adjust font size */}
                     <SearchBox searchChange={this.onSearchChange}/> 
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots}/> 
                        </ErrorBoundary>
                    </Scroll>
                    
               </div>
            );   
        }
    }
}

export default App;