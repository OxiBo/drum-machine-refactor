import React, { Component } from "react";
import DrumDisplay from "./DrumDisplay";
import Controls from "./Controls";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Drum Machine</h1>
        </header>
        <div className="container">
          <div id="drum-machine" onKeyPress={this.handleKeyPress}>
            <DrumDisplay
              padElement={"this.state.sounds"}
              handleClick={"this.handleClick"}
            />
          </div>

          <div id="controls">
            <Controls
              clipName={"this.state.clipName"}
              power={"this.state.power"}
              handlePowerControl={"this.handlePowerControl"}
              volume={"this.state.volume"}
              // handleVolume={this.handleVolume}
              handleVolumeMouseDown={"this.handleVolumeMouseDown"}
              handleVolumeMouseUp={"this.handleVolumeMouseUp"}
              selectBank={"this.selectBank"}
            />
          </div>
        </div>
      </div>
    );
  }
}

/*<div id="drum-machine" onKeyPress={this.handleKeyPress}>
                      <DrumDisplay
                         padElement={this.state.sounds}
                         handleClick={this.handleClick}
                       />
                   </div>

                   <div id="controls">
                        <Controls
                        clipName={this.state.clipName}
                        power={this.state.power}
                        handlePowerControl={this.handlePowerControl}
                        volume={this.state.volume}
                        // handleVolume={this.handleVolume}
                        handleVolumeMouseDown={this.handleVolumeMouseDown}
                        handleVolumeMouseUp={this.handleVolumeMouseUp}
                        selectBank={this.selectBank}
                        />
                   </div> */
