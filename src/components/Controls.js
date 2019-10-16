import React from "react";
import { connect } from "react-redux";
import DisplayVolume from "./DisplayVolume";
import PowerButton from "./PowerButton";
import Volume from "./Volume";
import SelectBanks from "./SelectBanks";

const Controls = ({ clipName, power }) => {
  // check if power is on to set the back ground of the div display
  const clipScreen = power ? "clipScreenOn" : "clipScreenOff";

  return (
    <div>
      <DisplayVolume />

      <div className="controlSection" id="controlButtons">
        <PowerButton />

        <Volume
          name={"volumeUp"}
        />
        <Volume
          name={"volumeDown"}
        />
      </div>

      <div className={`controlSection ${clipScreen}`} id="display">
        <p>{clipName}</p>
      </div>

      <div className="controlSection" id="banks">
        <p>Choose bank</p>
        <SelectBanks />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    clipName: state.clipName,
    power: state.power
  };
};
export default connect(mapStateToProps)(Controls);
