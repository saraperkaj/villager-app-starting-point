import { Component } from "react";
import "./App.css";
import villagerData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagerData: villagerData,
      villagers: [],
      currentVillager: villagerData.ant00,
      showVillage: true,
    };
  }
  changeVillager = () => {
    const { villagerData } = this.state;
    const numVillagers = Object.keys(this.state.villagerData).length;
    const randomI = Math.floor(Math.random() * numVillagers);
    const randomVillager = Object.values(villagerData)[randomI];
    this.setState({ currentVillager: randomVillager });
  };
  addVillager = () => {
    const { villagers, currentVillager } = this.state;
    this.setState({ villagers: [...villagers, currentVillager] });
  };

  clearVillage = () => {
    this.setState({ villagers: [] });
  };

  toggleVillageHiding = () => {
    if (this.setState.showVillage === true) {
      this.setState({ showVillage: false });
    } else {
      this.setState({ showVillage: false });
    }
  };
  // const handleSubmit = (event) => {
  //   const { villagers, villagerData } = this.state;
  //   event.preventDefault();
  //   this.setState({
  //     villagers: [...villagers, { villagerData: villagerData }],
  //   });
  // };

  render() {
    const { currentVillager, villagers, showVillage } = this.state;

    const names = villagers.map((villager) => (
      <p key={villager.id}>{villager.name["name-USen"]}</p>
    ));
    return (
      <div className="App">
        <h1>Animal Crossing Villagers</h1>
        <div>
          <button onClick={this.changeVillager}>Change villager</button>
          <button onClick={this.addVillager}>Add villager to village</button>
          <button onClick={this.clearVillage}>Clear Village</button>
          <div>
            Currently selected villager: {currentVillager.name["name-USen"]}
          </div>
          <div>
            Number of villagers in village:{" "}
            {villagers.length ? villagers.length : "none yet!"}
          </div>
          <button onClick={this.toggleVillageHiding}>Show/Hide Village</button>
          <div className="villager-grid">{showVillage ? names : ""}</div>
        </div>
      </div>
    );
  }
}

export default App;
