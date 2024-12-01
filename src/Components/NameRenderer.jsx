import React, { PureComponent } from "react";

class NameRenderer extends PureComponent {
  render() {
    console.log("Rendering Name:", this.props.name);
    return (
      <div>
        <p>
          <strong>Current Name:</strong> {this.props.name}
        </p>
      </div>
    );
  }
}

export default NameRenderer;
