import React from "react";
import { connect } from "react-redux";
import { searchStart } from "../../redux/search/search.actions";
import { getSongStart } from "../../redux/song/song.action";

import "./nav-bar.style.scss";

class Navigation extends React.Component {
  state = {
    search: "",
    result: "",
  };

  //onClick
  onClick = (event) => {
    const { searchStart, getSongStart } = this.props;
    const mood = event.target.innerHTML;
    const search = encodeURI("pixel " + mood.toLowerCase() + " art");
    searchStart(search);
    getSongStart(mood.toLowerCase());
  };

  //onChange
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    
  };

  //search
  searchHandle = () => {
    const { searchStart } = this.props;
    if (this.state.search === "") {
      return alert("What's your mood? Let me know.");
    }
    const searchGif = encodeURI("pixel " + this.state.search + " art");
    searchStart(searchGif);
  };

  //active side bar
  iconClickHandle = () => {
    const hyphens = document.querySelectorAll(".hyphen");
    for (let i = 0; i < hyphens.length; i++) {
      hyphens[i].classList.toggle(`hyphen-${i + 1}`);
    }

    const navMoods = document.querySelector(".nav-moods");
    navMoods.classList.toggle("nav-moods-visible");

    const moods = document.querySelectorAll(".nav-moods p");
    moods.forEach((p, index) => {
      if (p.style.animation) {
        p.style.animation = "";
      } else {
        p.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.3
        }s`;
      }
    });
  };

  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <p className="nav-name">YOUR MOOD</p>
          <div className="nav-icon" onClick={this.iconClickHandle}>
            <div className="hyphen"></div>
            <div className="hyphen"></div>
            <div className="hyphen"></div>
          </div>
        </div>
        <div className="nav-moods">
          <p name="relax" onClick={this.onClick}>
            Relax
          </p>
          <p name="happy" onClick={this.onClick}>
            Happy
          </p>
          <p name="sad" onClick={this.onClick}>
            Sad
          </p>
          <p name="chill out" onClick={this.onClick}>
            Chill
          </p>
          <p name="peacefull" onClick={this.onClick}>
            Peacefull
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchStart: (keywords) => dispatch(searchStart(keywords)),
  getSongStart: (kind) => dispatch(getSongStart(kind)),
});

export default connect(null, mapDispatchToProps)(Navigation);
