import React, { Component } from "react";
import Frame from "react-frame-component";

export class DemoFrame extends Component {
  render() {
    return (
      <Frame
        style={{ height: `${this.props.height ? this.props.height : "200px"}` }}
      >
        <div className={this.props.className}>{this.props.children}</div>
      </Frame>
    );
  }
}

export default DemoFrame;
