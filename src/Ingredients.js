import React from 'react';

class Ingredients extends React.Component {
  state = {
    meat: 'Beef',
    veg: 'Tomato',
    carbs: 'Pasta',
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ [event.target.id]: value });
  };

  render() {
    return (
      <form
        id="ingredients"
        onSubmit={(event) => {
          event.preventDefault();
          // passing through the currents state i.e. the current ingredients, to the app in order to be accessed by the createMeal function
          this.props.meal(this.state);
        }}
      >
        <label htmlFor="meat">Choose a meat:</label>
        <br></br>
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
        <br></br>
        <select onChange={this.handleChange} name="veg" id="veg">
          <option value="Tomato">Tomato</option>
          <option value="Peas">Peas</option>
          <option value="Carrot">Carrot</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="carbs">Choose a carbohydrate:</label>
        <br></br>
        <br></br>
        <select onChange={this.handleChange} name="carbs" id="carbs">
          <option value="Pasta">Pasta</option>
          <option value="Potato">Potato</option>
          <option value="Rice">Rice</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="submit">Create your meal:</label>
        <br></br>
        <br></br>
        <button id="submit" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Ingredients;
