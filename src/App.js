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
        <Ingredients />
        <Meal />
      </div>
    );
  }

  createMeal = () => {
    this.setState({ meal: 'Paella' });
  };
}

export default App;
