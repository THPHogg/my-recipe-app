import React from 'react';

class Ingredients extends React.Component {
  state = {
    meat: 'Beef',
    veg: 'Tomato',
    carbs: 'Pasta',
  };

  handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    // this.setState()
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // passing through the currents state i.e. the current ingredients, to the app in order to be accessed by the createMeal function
          this.props.meal(this.state);
        }}
      >
        <label htmlFor="meat">Choose a meat:</label>
        <br></br>
        {/* onChange has to be on the select on a label form */}
        <select onChange={this.handleChange} name="meat" id="meat">
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Pork">Pork</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="veg">Choose a vegetable:</label>
        <br></br>
        <select name="veg" id="veg">
          <option value="Tomato">Tomato</option>
          <option value="Peas">Peas</option>
          <option value="Carrots">Carrots</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="carbs">Choose a carbohydrate:</label>
        <br></br>
        <select name="carbs" id="carbs">
          <option value="Pasta">Pasta</option>
          <option value="Potatoes">Potatoes</option>
          <option value="Rice">Rice</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="submit">Create your meal:</label>
        <br></br>
        <button id="submit" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Ingredients;
