import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import './index.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h4 className='text-center mb-5'>Shopping List</h4>
        <ShoppingList/>
        
      </div>
    );
  }
}

export default App;
