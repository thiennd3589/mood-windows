import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { gifSelect } from "../../redux/search/search.selector";
import "./video-container.style.scss";


class VideoContainer extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  setGifSize = () => {
    const { gif, getSize } = this.props;
    let width = this.state.width < 600 ? this.state.width - 100 : gif.width;
    let height = (width * gif.height) / gif.width;

    if (height + 300 >= this.state.height) {
      height = window.innerHeight - 300;
      width = (height * gif.width) / gif.height;
    }
    console.log(gif.height,gif.width);
    console.log(height,width);
    return {
      url: gif.url,
      height,
      width,
    };
  };

  onResize = () => {
    window.onresize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  };

  render() {
    this.onResize();
    const { url, width, height} = this.setGifSize();
   

    return (
      <div className="video-container">
        <img
          className="gif"
          src={url}
          style={{ width, height }}
          alt="gif"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  gif: gifSelect,
});



export default connect(mapStateToProps)(VideoContainer);
