import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'black']
    }
  }
  spanColor = (color) => {
    return {
      backgroundColor: color
    }
  }
  pickColor = (color) => {
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return <span
        key={index} style={this.spanColor(color)}
        className={this.props.color === color ? 'active' : ''}
        onClick={() => this.pickColor(color)}
      ></span>
    })
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Color: {this.props.color}</div>
        <div className="panel-body">
          {elmColors}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
