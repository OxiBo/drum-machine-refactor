import React from 'react';
import { connect } from "react-redux"
import { drumPadClicked } from "../actions"
import { removeClass } from './../helperFuncs/helpers'

const DrumPad = ({name, id, src, power, volume, drumPadClicked }) => {

    const onDrumPadClick = (e) => {
        //play the sound only if the power button is on
        if(power) {
            // select the div element which was clicked
            const clickedPad = e.target.closest('.drum-pad').children[0];
            clickedPad.volume = volume / 100;
            clickedPad.currentTime = 0;
            clickedPad.play();
            drumPadClicked(clickedPad.dataset.key);
            // scale a drum pad and add color  when playing and remove it
            e.target.closest(".drum-pad").classList.add('playingPad');
            // remove the class
            removeClass(document.querySelectorAll(".drum-pad"), "transform", 'playingPad');
        }
       
    }
    return (
        <div className='drum-pad'  id=
          {name} onClick={(e) => onDrumPadClick(e)}>

          <audio className='clip' id={id} src={`${src}`} data-key={name}></audio>
           <p> {id}</p>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        power: state.power, 
        volume: state.volume,

    }
}

export default connect(mapStateToProps, { drumPadClicked })(DrumPad);

{/* 
 return (
       <div className='drum-pad' onClick={props.handleClick}>

//           <audio className='clip' id={props.id} src={`sounds/${props.src}`} data-key={props.name}></audio>
//            <p> {props.id}</p>

//         </div>
//     ) */}
