import React, { Component } from "react";
import NavBar from "./components/nav.jsx";
import Counters from "./components/counters.jsx";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
    console.log("Delete Called: " + id);
  };
  handleReset = () => {
    console.log("Hi, Reset was Called!");
    const counters = [...this.state.counters];
    for (let i = 0; i < counters.length; i++) {
      counters[i].value = 0;
    }
    this.setState({ counters });
    // console.log(counters);
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log("Increment Clicked!", counters);
  };
  handleTotal = () => {
    console.log("Hi total!");
    let counter = [...this.state.counters];
    let total = 0;
    for (let i = 0; i < counter.length; i++) {
      total += counter[i].value;
    }
    return total;
  };
  handleAdd = () => {
    const counters = [...this.state.counters];
    const len = counters.length;
    const new_task = { id: len + 1, value: 0 };
    counters.push(new_task);

    this.setState({ counters });
  };
  handleDeleteAll = () => {
    // const counters = [...this.state.counters];
    // const len = counters.length;
    // const new_task = { id: len + 1, value: 0 };
    // counters.push(new_task);

    this.setState({ counters: [] });
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar getTotal={this.handleTotal} />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onAdd={this.handleAdd}
            onDeleteAll={this.handleDeleteAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
