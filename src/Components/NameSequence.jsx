import React, { Component } from "react";
import NameOutput from "./NameOutput.jsx";

class NameSequence extends Component {
  state = {
    names: ["Prabh", "Jot", "Singh"], // Array of names
    currentNameIndex: 0,
    isDisplaying: false, // Track if name display has started
  };

  startDisplay = () => {
    const { isDisplaying } = this.state;

    if (!isDisplaying) {
      this.interval = setInterval(this.updateName, 2000);
      this.setState({ isDisplaying: true }); // Start the display
    }
  };

  updateName = () => {
    this.setState((prevState) => {
      const nextIndex =
        prevState.currentNameIndex < prevState.names.length - 1
          ? prevState.currentNameIndex + 1
          : prevState.currentNameIndex; // Stop at the last name
      return { currentNameIndex: nextIndex };
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when component unmounts
  }

  render() {
    const { names, currentNameIndex, isDisplaying } = this.state;

    return (
      <div>
        <h3>Full Name</h3>
        <NameOutput name={names[currentNameIndex]} />
        <button onClick={this.startDisplay} disabled={isDisplaying}>
          {isDisplaying ? "Displaying..." : "Start Display"}
        </button>
      </div>
    );
  }
}

export default NameSequence;
