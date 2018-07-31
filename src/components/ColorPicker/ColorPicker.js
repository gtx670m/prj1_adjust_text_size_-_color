import React, { Component } from 'react';
import './ColorPicker.scss';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', '#56ccb1']
    };
  }
  showColor = (color) => {
    return {
      backgroundColor: color
    }
  }
  setActiveColor = (color) => {
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return <span
        key={index}
        style={this.showColor(color)}
        className={this.props.color === color ? 'active' : ''}
        onClick={() => this.setActiveColor(color)}>
      </span>
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Color Picker</div>
        <div className="panel-body">
          {elmColors}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
