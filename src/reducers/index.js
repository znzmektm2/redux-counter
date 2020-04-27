import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black',
  number: 0
}

function counter (state = initialState, action) {
  console.log(action.types);
  switch (action.types) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT: 
      return {
        ...state,
        number: state.number - 1
      } 
    case types.SET_COLOR:
      return {
        ...state,
        colot: action.color
      };
      default:
        return state;
  } 
}