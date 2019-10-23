import React from "react";
import DrumPad from "./DrumPad";
import { connect } from "react-redux";
import { removeClass } from "./../helperFuncs/helpers";
import { drumPadClicked } from "../actions";

// helper function
const playSound = (el, power, volume) => {
  if (power) {
    el.volume = volume / 100;
    el.currentTime = 0;
    el.play();
    drumPadClicked(el.dataset.key);
  }
};

class DrumDisplay extends React.Component {
  // const DrumDisplay = ({ drumPads, power, volume, drumPadClicked }) => {

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }
  handleKeyPress = e => {
    const { power, volume } = this.props;
    const keyName = e.key.toUpperCase();
    const pressed = document.getElementById(keyName);
    // console.log(pressed);
    if (power && pressed) {
      playSound(pressed, power, volume);
      // console.log("??");
      // scale a drum pad and add color  when playing and remove it
      pressed.parentElement.classList.add("playingPad");
      // thisComponent.removeClass();
      removeClass(
        document.querySelectorAll(".drum-pad"),
        "transform",
        "playingPad"
      );
    }
  };

  componentWillUnmount() {
    this.drumDisplayRef.current.removeEventListener(
      "keypress",
      this.handleKeyPress
    );
  }

  handleDrumPadClick = e => {
    const { power, volume } = this.props;

    //play the sound only if the power button is on
    if (power) {
      // select the div element which was clicked
      if (e.target.closest(".drum-pad")) {
        const clickedPad = e.target.closest(".drum-pad").children[0];
        playSound(clickedPad, power, volume);
        // scale a drum pad and add color  when playing and remove it
        e.target.closest(".drum-pad").classList.add("playingPad");
        // remove the class
        removeClass(
          document.querySelectorAll(".drum-pad"),
          "transform",
          "playingPad"
        );
      }
    }
  };

  renderDrumPads = () => {
    const pads = this.props.drumPads.map(pad => {
      return (
        <DrumPad
          key={pad.keys}
          keyCode={pad.keyCode}
          id={pad.keys}
          src={pad.src}
          name={pad.name}
        />
      );
    });

    return pads;
  };

  render() {
    return (
      <React.Fragment>
        <div
          ref={this.drumDisplayRef}
          id="clipName"
          onClick={e => this.handleDrumPadClick(e)}
        >
          {this.renderDrumPads()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    drumPads: state.sounds,
    power: state.power,
    volume: state.volume
  };
};

export default connect(
  mapStateToProps,
  { drumPadClicked }
)(DrumDisplay);

/*

import React, { useEffect, useCallBack } from "react";
import DrumPad from "./DrumPad";
import { connect } from "react-redux";
import { removeClass } from "./../helperFuncs/helpers";
import { drumPadClicked } from "../actions";

// const playSound = (el, power, volume) => {
//     if (power) {
//       el.volume = volume / 100;
//       el.currentTime = 0;
//       el.play();
//       drumPadClicked(el.dataset.key);
//     }
//   };

const DrumDisplay = ({ drumPads, power, volume, drumPadClicked }) => {
  const playSound = el => {
    console.log(power);
    if (power) {
      el.volume = volume / 100;
      el.currentTime = 0;
      el.play();
      drumPadClicked(el.dataset.key);
    }
  };

  
  useEffect(() => {
    console.log("rerenders");
    
    const handleKeyPress = e => {
      const keyName = e.key.toUpperCase();
      console.log(keyName);
      const pressed = document.getElementById(keyName);
      console.log(pressed);
      if (pressed) {



        playSound(pressed);
        console.log("??");
        // scale a drum pad and add color  when playing and remove it
        pressed.parentElement.classList.add("playingPad");
        // thisComponent.removeClass();
        removeClass(
          document.querySelectorAll(".drum-pad"),
          "transform",
          "playingPad"
        );
      }
    };
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    }; // when component get unmounted
  }, [power]);

  const handleDrumPadClick = e => {
    //play the sound only if the power button is on
    if (power) {
      // select the div element which was clicked
      const clickedPad = e.target.closest(".drum-pad").children[0];
      playSound(clickedPad);
      // scale a drum pad and add color  when playing and remove it
      e.target.closest(".drum-pad").classList.add("playingPad");
      // remove the class
      removeClass(
        document.querySelectorAll(".drum-pad"),
        "transform",
        "playingPad"
      );
    }
  };

  const pads = drumPads.map(pad => {
    return (
      <DrumPad
        key={pad.keys}
        keyCode={pad.keyCode}
        id={pad.keys}
        src={pad.src}
        name={pad.name}
      />
    );
  });

  return (
    <React.Fragment>
      <div id="clipName" onClick={e => handleDrumPadClick(e)}>
        {pads}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    drumPads: state.sounds,
    power: state.power,
    volume: state.volume
  };
};

export default connect(
  mapStateToProps,
  { drumPadClicked }
)(DrumDisplay);

*/
