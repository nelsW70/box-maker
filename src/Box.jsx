import React, { Component } from 'react';

export class Box extends Component {
  render() {
    return (
      <>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color
          }}
        ></div>
        <button onClick={this.props.removeBox}>x</button>
      </>
    );
  }
}

export default Box;
