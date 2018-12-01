import React, { Component } from "react";
import { connect } from "react-redux";
import { createProperty } from "../../../actions/propertyActions";

class CreateProperty extends Component {
  state = {
    name: "",
    price: "",
    sqft: "",
    br: "",
    ba: "",
    img: "",
    errors: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitProperty = e => {
    e.preventDefault();

    const { name, ba, br, img, price } = this.state;

    const newProperty = {
      name,
      ba,
      br,
      img,
      price
    };

    this.props.createProperty(newProperty);
  };

  render() {
    return (
      <form className="create-property-form" onSubmit={this.submitProperty}>
        <h1>Add a property to your list</h1>
        <input
          onChange={this.onChangeHandler}
          name="name"
          type="text"
          placeholder="property name"
        />
        <input
          onChange={this.onChangeHandler}
          name="price"
          type="text"
          placeholder="selling price"
        />
        <input
          onChange={this.onChangeHandler}
          name="sqft"
          type="text"
          placeholder="square footage"
        />
        <input
          onChange={this.onChangeHandler}
          name="br"
          type="text"
          placeholder="number of bedrooms"
        />
        <input
          onChange={this.onChangeHandler}
          name="ba"
          type="text"
          placeholder="number of bathrooms"
        />
        <input
          onChange={this.onChangeHandler}
          name="img"
          type="text"
          placeholder="add image"
        />
        <input
          onChange={this.onChangeHandler}
          type="submit"
          value="ADD TO LIST"
        />
      </form>
    );
  }
}

// const mapStateToProps = state => ({

// })

export default connect(
  null,
  { createProperty }
)(CreateProperty);
