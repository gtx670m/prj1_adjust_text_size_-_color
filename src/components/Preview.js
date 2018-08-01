import React, { Component } from 'react';

class Preview extends Component {
  showPreview ()  {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    }
  }
  render() {

    return (
      <div className="preview_box"
        style={this.showPreview()}
        // style={{color:"blue",borderColor: "purple"}}
      >
        Nội dung cần điều chỉnh màu sắc và kích thước {this.showPreview}
      </div>
    );
  }
}

export default Preview;
