import './App.css';
import Meal from './Meal';
import Header from './Header';
import Ingredients from './Ingredients';
import React from 'react';

class App extends React.Component {
  state = {
    meals: [],
  };

  render() {
    return (
      <div>
        <Header />
        <Ingredients meal={this.createMeal}/>
        <Meal />
      </div>
    );
  }

  createMeal = () => {
    console.log('hello');
  };
}

export default App;
