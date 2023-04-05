import React, { Component } from "react";
import Counter from "./counter";
// import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onAdd, onDeleteAll } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-success m-2">
          + Add
        </button>
        <button onClick={onDeleteAll} className="btn btn-warning m-2">
          -* Delete All
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
