import React, { Component } from 'react';
import './Preview.scss';

class Preview extends Component {
  showColor = (color) => {
    return {
      color: color,
      borderColor: color
    }
  }
  showFontSize = (fontSize) => {
    return {
      fontSize: fontSize
    }
  }
  render() {

    return (
      <div className="preview_box"
        style={this.showColor(this.props.color)}>
        {/* , this.showFontSize(this.props.fontSize) */}
        Nội dung cần điều chỉnh màu sắc và kích thước
      </div>
    );
  }
}

export default Preview;
