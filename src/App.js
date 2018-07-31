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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeBox />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <InfoBox color={this.state.color} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Preview color={this.state.color}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
