import './App.css';
import Meal from './Meal';
import Header from './Header';
import Ingredients from './Ingredients';
import React from 'react';

const meals = [
  {
    name: 'Penne Pasta with Meat Sauce',
    ingredients: ['Beef', 'Tomato', 'Pasta'],
    url:
      'https://static01.nyt.com/images/2020/04/15/dining/15Pasta-Meal-Sauce-a/15Pasta-Meal-Sauce-a-articleLarge-v2.jpg',
  },
  {
    name: 'Chicken and tomato pasta bake recipe',
    ingredients: ['Chicken', 'Tomato', 'Pasta'],
    url: '',
  },
  {
    name: 'Pasta with Braised Pork',
    ingredients: ['Pork', 'Tomato', 'Pasta'],
    url: '',
  },
  {
    name: 'Rigatoni with slow-cooked beef and peas',
    ingredients: ['Beef', 'Peas', 'Pasta'],
    url: '',
  },
  {
    name: 'Creamy chicken and pea carbonara',
    ingredients: ['Chicken', 'Peas', 'Pasta'],
    url: '',
  },
  {
    name: 'Lemon Pork Medallions with Pasta and Peas',
    ingredients: ['Pork', 'Peas', 'Pasta'],
    url: '',
  },
  {
    name: 'Beef and Carrot Ragu',
    ingredients: ['Beef', 'Carrot', 'Pasta'],
    url: '',
  },
  {
    name: 'Chicken Pasta in Carrot Sauce',
    ingredients: ['Chicken', 'Carrot', 'Pasta'],
    url: '',
  },
  {
    name: 'Pork Stew With Pasta',
    ingredients: ['Pork', 'Carrot', 'Pasta'],
    url: '',
  },
  {
    name: 'Italian Beef & Potato Stew',
    ingredients: ['Beef', 'Tomato', 'Potato'],
    url: '',
  },
  {
    name: 'Paprika Chicken with Potatoes and Tomatoes',
    ingredients: ['Chicken', 'Tomato', 'Potato'],
    url: '',
  },
  {
    name: 'Pork Chops In Tomato Sauce',
    ingredients: ['Pork', 'Tomato', 'Potato'],
    url: '',
  },
  { name: 'Keema Aloo', ingredients: ['Beef', 'Peas', 'Potato'], url: '' },
  {
    name: 'Chicken Breasts with Potatoes and Mashed Peas',
    ingredients: ['Chicken', 'Peas', 'Potato'],
    url: '',
  },
  {
    name: 'Diced pork with potato and peas',
    ingredients: ['Pork', 'Peas', 'Potato'],
    url: '',
  },
  {
    name: 'Pot Roast with Potatoes and Carrots',
    ingredients: ['Beef', 'Carrot', 'Potato'],
    url: '',
  },
  {
    name: 'Baked Chicken, Potatoes, Carrots and Herbs',
    ingredients: ['Chicken', 'Carrot', 'Potato'],
    url: '',
  },
  { name: 'Pork Afritada', ingredients: ['Pork', 'Carrot', 'Potato'], url: '' },
  {
    name: 'Beef Tomato Stir-Fry',
    ingredients: ['Beef', 'Tomato', 'Rice'],
    url: '',
  },
  {
    name: 'Tomato-Basil Chicken and Rice',
    ingredients: ['Chicken', 'Tomato', 'Rice'],
    url: '',
  },
  {
    name: 'Mediterranean Pork And Tomato Rice',
    ingredients: ['Pork', 'Tomato', 'Rice'],
    url: '',
  },
  {
    name: 'Rice, peas and beef mince',
    ingredients: ['Beef', 'Peas', 'Rice'],
    url: '',
  },
  {
    name: 'Spanish Rice with Chicken & Peas',
    ingredients: ['Chicken', 'Peas', 'Rice'],
    url: '',
  },
  {
    name: 'Hawaiian Pulled Pork Fried Rice with Peas',
    ingredients: ['Pork', 'Peas', 'Rice'],
    url:
      'https://thymeforcocktails.com/wp-content/uploads/2016/04/Hawaiian-Pulled-Pork-Fried-Rice-2-1.jpg',
  },
  {
    name: 'Beef Fried Rice with Onion and Shredded Carrot',
    ingredients: ['Beef', 'Carrot', 'Rice'],
    url: '',
  },
  {
    name: 'Chicken Carrot Pilaf',
    ingredients: ['Chicken', 'Carrot', 'Rice'],
    url: '',
  },
  {
    name: 'Spicy Pork Bowl with Greens and Carrots',
    ingredients: ['Pork', 'Carrot', 'Rice'],
    url: '',
  },
];

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
    console.log(Object.values(ingredients));
    console.log(
      meals.filter(
        (meal) =>
          JSON.stringify(meal.ingredients) ===
          JSON.stringify(Object.values(ingredients))
      )
    );
  };
}

export default App;
