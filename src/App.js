import './App.css';
import Meal from './Meal';
import Header from './Header';
import Ingredients from './Ingredients';
import React from 'react';

const meals = {
  "Penne Pasta with Meat Sauce": [ "Beef", "Tomato", "Pasta" ],
  "Chicken and tomato pasta bake recipe": ["Chicken", "Tomato", "Pasta"],
  "Pasta with Braised Pork": ["Pork", "Tomato", "Pasta"],
  "Rigatoni with slow-cooked beef and peas": [ "Beef", "Peas", "Pasta" ],
  "Creamy chicken and pea carbonara": [ "Chicken", "Peas", "Pasta"],
  "Lemon Pork Medallions with Pasta and Peas": [ "Pork", "Peas", "Pasta"],
  "Beef and Carrot Ragu": [ "Beef", "Carrot", "Pasta" ],
  "Chicken Pasta in Carrot Sauce": ["Chicken", "Carrot", "Pasta"],
  "Pork Stew With Pasta": ["Pork", "Carrot", "Pasta"],
  "Italian Beef & Potato Stew": [ "Beef", "Tomato", "Potato" ],
  "Paprika Chicken with Potatoes and Tomatoes": ["Chicken", "Tomato", "Potato"],
  "Pork Chops In Tomato Sauce": [ "Pork", "Tomato", "Potato" ],
  "Keema Aloo": [ "Beef", "Peas", "Potato" ],
  "Chicken Breasts with Potatoes and Mashed Peas": ["Chicken", "Peas", "Potato" ],
  "Diced pork with potato and peas": [ "Pork", "Peas", "Potato"],
  "Pot Roast with Potatoes and Carrots": [ "Beef", "Carrot", "Potato" ],
  "Baked Chicken, Potatoes, Carrots and Herbs": [ "Chicken", "Carrot", "Potato" ],
  "Pork Afritada": [ "Pork", "Carrot", "Potato" ],
  "Beef Tomato Stir-Fry": [ "Beef", "Tomato", "Rice" ],
  "Tomato-Basil Chicken and Rice": [ "Chicken", "Tomato", "Rice" ],
  "Mediterranean Pork And Tomato Rice": [ "Pork", "Tomato", "Rice" ],
  "Rice, peas and beef mince": [ "Beef", "Peas", "Rice" ],
  "Spanish Rice with Chicken & Peas": [ "Chicken", "Peas", "Rice" ],
  "Hawaiian Pulled Pork Fried Rice with Peas": [ "Pork", "Peas", "Rice" ],
  "Beef Fried Rice with Onion and Shredded Carrot": [ "Beef", "Carrot", "Rice" ],
  "Chicken Carrot Pilaf": [ "Chicken", "Carrot", "Rice" ],
  "Spicy Pork Bowl with Greens and Carrots": [ "Pork", "Carrot", "Rice" ],
} 


class App extends React.Component {
  state = {
    meals: [],
  };

  render() {
    return (
      <div>
        <Header />
        <br></br>
        <Ingredients meal={this.createMeal} />
        <Meal />
      </div>
    );
  }

  createMeal = (ingredients) => {
    Object.values(ingredients)
    Object.entries(meals).filter(meal => {
      console.log(meal[1]);
      if (JSON.stringify(meal[1]) === JSON.stringify(Object.values(ingredients))) console.log(meal[0])
      return true;
    });
  }
}

export default App;
