import React, { Component } from 'react';

class SizeBox extends Component {
  changeSize = (value) => {
    this.props.receiveSize(value);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">Size: {this.props.fontSize}px</div>
        <div className="panel-body">
          <button
            type="button" className="btn btn-success"
            onClick={()=>this.changeSize(2)}
          >
            Tăng
          </button>
          <button
            type="button" className="btn btn-success"
            onClick={()=>this.changeSize(-2)}
          >
            Giảm
          </button>
          <button 
            type="button" className="btn btn-primary"
            onClick={()=>this.changeSize(0)}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default SizeBox;
