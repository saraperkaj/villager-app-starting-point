import { Component } from "react";
import "./App.css";
import villagerData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagerData: villagerData,
      villagers: [],
    };
  }

  changeVillager = () => {};

  addVillager = () => {};

  handleReset = () => {};

  render() {
    return (
      <div className="App">
        <h1>Animal Crossing Villagers</h1>
        <div>
          <button>Change villager</button>
          <button>Add villager to village</button>
          <button>Clear Village</button>
          <div>Currently selected villager:</div>
          <div>Number of villagers in village: </div>
          <div className="villager-grid"></div>
        </div>
      </div>
    );
  }
}

export default App;
