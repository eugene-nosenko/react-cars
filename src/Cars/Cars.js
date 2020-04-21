import React from "react";
import "./Cars.css";
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";

class Car extends React.Component {
  componentDidMount() {
    if (this.props.index === 2) {
      this.inputRef.focus();
    }
  }

  render() {
    const inputClasses = ["input"];

    if (this.props.name !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    if (this.props.name.length > 4) {
      inputClasses.push("bold");
    }

    return (
      <>
        <h3>Сar name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          ref={(inputRef) => (this.inputRef = inputRef)}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withClass(Car, Car);
