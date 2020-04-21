import React, { Component } from "react";
import "./App.css";
import Car from "./Cars/Cars";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    console.log("App constructor");
    super(props);
    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 },
      ],
      pageTitle: "React components",
      showCars: false,
      clicked: false,
    };
  }

  toggleCarsHamdler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  }

  render() {
    console.log("App render");
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            index={index}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) =>
              this.onChangeName(event.target.value, index)
            }
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <button onClick={this.toggleCarsHamdler}>toggleCars</button>
        <button onClick={() => this.setState({ clicked: true })}>
          Change clicked
        </button>
        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
