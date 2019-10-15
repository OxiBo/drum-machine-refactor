import React from 'react';
import DrumPad from './DrumPad';
import { connect } from 'react-redux'

const DrumDisplay = ({ drumPads }) => {

        const pads = drumPads.map(pad => {

            return (
                <DrumPad
                    key={pad.keys}
                    keyCode={pad.keyCode}
                    id={pad.keys}
                    src={pad.src}
                    name={pad.name}
                    
                />
            )
        });


        return (
            <div>
                <div id="clipName">
                        {pads}
                </div>
            </div>
        )
    }

const mapStateToProps = (state) => {
    return {
        drumPads: state.sounds
    }
}

export default connect(mapStateToProps)(DrumDisplay);
//handleClick={props.handleClick}