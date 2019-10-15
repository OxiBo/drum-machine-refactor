import { bankOne, bankTwo } from "./soundsBanks";
import {
  SELECT_BANK,
  POWER_ON_OFF,
  DRUM_PAD_CLICKED,
  VOLUME_CHANGE,
  SET_VOLUME_INTERVAL
} from "../actions/types";

const defaultState = {
  power: false,
  volume: 50,
  clipName: "",
  sounds: bankOne,
  activeBank: null,
  intervalIdVolume: null
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case POWER_ON_OFF:
      console.log(state);
      return {
        ...state,
        power: !state.power,
        volume: 50,
        clipName: state.power ? "" : "WELCOME",
        activeBank: state.power ? null : 1
      };
    case SELECT_BANK:
      return {
        ...state,
        sounds: action.payload === 1 ? bankOne : bankTwo,
        activeBank: action.payload
      };

    case DRUM_PAD_CLICKED:
      return {
        ...state,
        clipName: action.payload
      };

    case VOLUME_CHANGE:
    //   if (state.volume >= 0 && state.volume <= 100) {
        return {
          ...state,
          volume: state.volume + action.payload
        };
    //   } else {
    //     return state;
    //   }

    case SET_VOLUME_INTERVAL:
      console.log(action.payload);
      return {
        ...state,
        intervalIdVolume: action.payload
      };

    default:
      return state;
  }
};

// const defaultStateSelectBank = {
//   sounds: bankOne,
//   activeBank: null
// };

// export const selectBankReducer = (state = defaultStateSelectBank, action) => {
//   switch (action.type) {
//     case SELECT_BANK:
//       return {
//         ...state,
//         sounds: action.payload === 1 ? bankOne : bankTwo,
//         activeBank: action.payload
//       };

//     default:
//       return state;
//   }
// };
