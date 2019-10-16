import React, { Component } from "react";
import DrumDisplay from "./DrumDisplay";
import Controls from "./Controls";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Drum Machine</h1>
        </header>
        <div className="container">
          <div id="drum-machine" onKeyPress={this.handleKeyPress}>
            <DrumDisplay />
          </div>

          <div id="controls">
            <Controls />
          </div>
        </div>
        <footer>Written and coded by OxiBo, 2019</footer>
      </React.Fragment>
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
