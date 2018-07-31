import React, { Component } from 'react';
import './App.scss';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SizeBox from './components/SizeBox/SizeBox';
import Preview from './components/Preview/Preview';
import InfoBox from './components/InfoBox/InfoBox';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }
  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }
  onChangeSize = (params) => {
    if(this.state.fontSize + params >= 10 && this.state.fontSize + params <= 38) {
      this.setState({
        fontSize: this.state.fontSize + params
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
              onReceiveColor={this.onSetColor}/>
          </div>
          
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeBox 
              fontSize={this.state.fontSize} 
              onReceiveNumber={this.onChangeSize}/>
          </div>
          
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <InfoBox color={this.state.color} fontSize={this.state.fontSize}/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Preview color={this.state.color} fontSize={this.state.fontSize}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
