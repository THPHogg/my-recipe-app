import React from 'react';

const Ingredients = (props) => {
  return (
    <form onSubmit="createMeal()">
      <label for="meat">Choose a meat:</label>
      <br></br>
      <select name="meat" id="meat">
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Pork">Pork</option>
      </select>
      <br></br>
      <br></br>
      <label for="veg">Choose a vegetable:</label>
      <br></br>
      <select name="veg" id="veg">
        <option value="Tomato">Tomato</option>
        <option value="Peas">Peas</option>
        <option value="Carrots">Carrots</option>
      </select>
      <br></br>
      <br></br>
      <label for="carbs">Choose a carbohydrate:</label>
      <br></br>
      <select name="carbs" id="carbs">
        <option value="Pasta">Pasta</option>
        <option value="Potatoes">Potatoes</option>
        <option value="Rice">Rice</option>
      </select>
      <br></br>
      <br></br>
      <label for="submit">Create your meal:</label>
      <br></br>
      <button id="submit" type="submit">
        Create
      </button>
    </form>
  );
};

export default Ingredients;
