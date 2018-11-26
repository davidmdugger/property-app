import React, { Component } from "react";
import { connect } from "react-redux";

import { getProperties, deleteProperty } from "../../actions/propertyActions";

// components
import spinner from "../../img/spinner.gif";
import Property from "./Property/Property";

import "./Properties";

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  deletePropertyHandler = id => {
    this.props.deleteProperty(id);
  };

  render() {
    const { properties, isLoading } = this.props;
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
            <Property
              id={property._id}
              key={property._id}
              name={property.name}
              img={property.img}
              deleteProperty={this.deletePropertyHandler}
            />
          ))
        ) : (
          <h4>No properties found</h4>
        );
    }

    return (
      <div>
        <h1>Properties</h1>
        <p className="properties-wrapper">
          <small>Total: {properties.length}</small>
        </p>
        <div className="properties-wrapper">{renderProperties}</div>
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
  { getProperties, deleteProperty }
)(Properties);
