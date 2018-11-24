import React, { Component } from "react";
import { connect } from "react-redux";

import { getProperties } from "../../actions/propertyActions";

import spinner from "../../img/spinner.gif";

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const { properties, isLoading } = this.props;
    console.log(isLoading);
    let renderProperties;
    if (properties === null || isLoading) {
      renderProperties = (
        <img
          style={{ width: "150px", height: "150px" }}
          src={spinner}
          alt="spinner"
        />
      );
    } else {
      renderProperties =
        properties.length > 0 ? (
          properties.map(property => (
            <div key={property._id}>
              <h3>{property.name}</h3>
              <img src={property.img} alt={property.name} />
            </div>
          ))
        ) : (
          <h4>No properties found</h4>
        );
    }

    return (
      <div>
        <h1>Properties</h1>
        {renderProperties}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.property.properties,
  isLoading: state.property.isLoading
});

export default connect(
  mapStateToProps,
  { getProperties }
)(Properties);
