import React, { Component } from "react";
import "./App.css";
import Car from "./Cars/Cars";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mazda", year: 2010 },
    ],
    pageTitle: "React components",
    showCars: false,
  };

  toggleCarsHamdler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle,
    });
  };

  render() {
    const divStyle = {
      textAlign: "center",
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHamdler}>toggleCars</button>

        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() => this.changeTitleHandler(car.name)}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
