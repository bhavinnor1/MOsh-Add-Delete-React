import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  // };
  styles = {
    fontWeight: "bold",
    fontSize: 10,
  };
  // renderTags() {
  //   if (this.state.tags.length === 0) return "There are no Tags";
  //   return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  // }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatCount = () => {
    let count = this.props.counter.value;
    console.log(count);
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
