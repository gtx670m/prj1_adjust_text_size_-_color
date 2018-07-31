import React, { Component } from 'react';
import './InfoBox.scss';

class InfoBox extends Component {
  render() {
    return (
      <div className='info_box'>
        Color : {this.props.color} - Size: {this.props.fontSize}px
      </div>
    );
  }
}

export default InfoBox;
