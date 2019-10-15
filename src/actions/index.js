import { SELECT_BANK, POWER_ON_OFF, DRUM_PAD_CLICKED, VOLUME_CHANGE, SET_VOLUME_INTERVAL } from './types'

export const powerOnOff = () => {
    return {
        type: POWER_ON_OFF
    }
}

export const selectBankAction = (selectedBank) => {
    return {
        type: SELECT_BANK, 
        payload: selectedBank
    }
}

export const drumPadClicked = (clipName) => {
    return {
        type: DRUM_PAD_CLICKED, 
        payload: clipName
    }
}

export const changeVolumeAction = (num) => {
    console.log(num)
    return {
        type: VOLUME_CHANGE,
        payload: num
    }
} 

export const setVolumeInterval = (intervalId) => {
    return {
        type: SET_VOLUME_INTERVAL,
        payload: intervalId
    }
} 
