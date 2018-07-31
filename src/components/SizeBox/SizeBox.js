import React, { Component } from 'react';
import './SizeBox.scss';

class SizeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 10
    };
  }
  
  changeSize = (value) => {
    this.props.onChangeSize(value);
  }
 
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">Size: {this.state.fontSize}px</div>
        <div className="panel-body">
          <button 
            type="button" className="btn btn-success" 
            onClick={()=>this.changeSize(2)}>
            Tăng
          </button>
          <button 
            type="button" className="btn btn-success" 
            onClick={()=>this.changeSize(-2)}>
            Giảm
          </button>
          <button type="button" className="btn btn-primary">Reset</button>
        </div>
      </div>
    );
  }
}

export default SizeBox;
