import {INCREMENT_COUNTER,DECREMENT_COUNTER,RESET} from '../actionType';

const incrementCounter = ({value}, type) => {
    return (dispatch) => {
        dispatch({type: INCREMENT_COUNTER, payload: value+1});
    };
};

const decrementCounter = ({value}, type) => {
    return (dispatch) => {
        dispatch({type: DECREMENT_COUNTER, payload: value-1});
    };
};

const reset = (type) => {
    return (dispatch) => {
        dispatch({type: RESET, payload: 0});
    };
};


export default {
    incrementCounter,
    decrementCounter,
    reset,
  };
