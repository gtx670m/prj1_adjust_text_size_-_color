import React, { Component } from 'react';
import './App.scss';
import ColorPicker from './components/ColorPicker';
import SizeBox from './components/SizeBox';
import Preview from './components/Preview';
import InfoBox from './components/InfoBox';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 14
    }
  }
  receiveColor = (params) => {
    this.setState({
      color: params
    });
  }
  receiveSize = (params) => {
    if(this.state.fontSize + params >= 8 && this.state.fontSize + params <= 38) {
      this.setState({
        fontSize: this.state.fontSize + params
      });
    }
    if(params===0) {
      this.setState({
        fontSize: 14,
        color: "red"
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.receiveColor}
            />
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeBox
              fontSize={this.state.fontSize}
              receiveSize={this.receiveSize}
            />
          </div>

        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <InfoBox fontSize={this.state.fontSize} color={this.state.color} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Preview fontSize={this.state.fontSize} color={this.state.color} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
