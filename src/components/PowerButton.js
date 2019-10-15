import React from "react";
import { connect } from "react-redux";
import { powerOnOff } from "../actions";

const PowerButton = ({ power = false, powerOnOff }) => {
  const styles = power ? "on" : "off";
  const buttonText = power ? "ON" : "OFF";
  return (
    <div>
      <button id="power" className={styles} onClick={() => powerOnOff()}>
        {buttonText}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    power: state.power
  };
};

export default connect(
  mapStateToProps,
  { powerOnOff }
)(PowerButton);
