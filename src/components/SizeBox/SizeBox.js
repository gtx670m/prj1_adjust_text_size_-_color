import React, { Component } from 'react';
import './SizeBox.scss';

class SizeBox extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">Size Adjust</div>
        <div className="panel-body">
            <button type="button" className="btn btn-success">Giảm</button>
            <button type="button" className="btn btn-success">Tăng</button>
            <button type="button" className="btn btn-primary">Reset</button>
        </div>
      </div>
    );
  }
}

export default SizeBox;
