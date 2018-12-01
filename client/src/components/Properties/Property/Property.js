import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getProperty } from "../../../actions/propertyActions";

import Spinner from "../../common/Spinner";
import loading from "../../../img/spinner.gif";

class Property extends PureComponent {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getProperty(this.props.match.params.id);
    }
  }

  render() {
    const { name, price, img, loading } = this.props.property.property;
    let { property } = this.props.property;

    if (loading === true) {
      property = <img src={loading} alt="uep" />;
    } else {
      property = (
        <div className="property">
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h4>{price}</h4>
        </div>
      );
    }
    return <div>{property}</div>;
  }
}

const mapStateToProps = state => ({
  property: state.property
});

export default connect(
  mapStateToProps,
  { getProperty }
)(Property);
