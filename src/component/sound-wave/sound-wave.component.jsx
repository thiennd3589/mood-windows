import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { songIDSelect } from "../../redux/song/song.selector";
import { ForwardOutlined, BackwardOutlined } from "@ant-design/icons";

import "./sound-wave.style.scss";

class SoundWave extends React.Component {
  constructor() {
    super();
    this.state = {
      embedIDs: [
        { id: "ZW677U88" },
        { id: "ZW6FEDOA" },
        { id: "ZW78WAEC" },
        { id: "ZW7AUOCI" },
        { id: "ZW9ABCWU" },
      ],
      currentSong: 0,
    };
  }

  prevSong = () => {
    if (this.state.currentSong === 0) {
      return this.setState({ currentSong: this.state.embedIDs.length - 1 });
    } else {
      return this.setState({ currentSong: this.state.currentSong - 1 });
    }
  };

  nextSong = () => {
    if (this.state.currentSong === this.state.embedIDs.length - 1) {
      return this.setState({ currentSong: 0 });
    } else {
      return this.setState({ currentSong: this.state.currentSong + 1 });
    }
  };

  componentDidUpdate() {
    const { embedIDs } = this.props;
    if (embedIDs[0].id === this.state.embedIDs[0].id) {
      return null;
    } else {
      this.setState({ embedIDs });
    }
  }

  componentDidMount() {
    const { embedIDs } = this.props;

    this.setState({
      embedIDs,
      currentSong: parseInt(Math.random() * embedIDs.length),
    });

  }

  render() {
    const { embedIDs } = this.props;


    return (
      <div id="sound">
        <button className="prev" onClick={this.prevSong}>
          <BackwardOutlined style={{ fontSize: "2rem" }} />
        </button>
        <iframe
          scrolling="yes"
          width="40%"
          height="50"
          src={`https://zingmp3.vn/embed/song/${
            embedIDs[this.state.currentSong].id
          }?start=true`}
          frameBorder="0"
          allowFullScreen={true}
          title="song"
        />
        <button className="next" onClick={this.nextSong}>
          <ForwardOutlined
            style={{ fontSize: "2rem", backgroundColor: "none" }}
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  embedIDs: songIDSelect,
});

export default connect(mapStateToProps)(SoundWave);
