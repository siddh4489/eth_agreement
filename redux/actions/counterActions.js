import {INCREMENT_COUNTER,DECREMENT_COUNTER,RESET,MYNAME} from '../actionType';

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
        dispatch({type: RESET, payload: 0,payloadName :'reset raj'});
    };
};

const myName = (type) => {
    return (dispatch) => {
        dispatch({type: MYNAME, payload: 'Siddhraj Atodaria'});
    };
};


export default {
    incrementCounter,
    decrementCounter,
    reset,
    myName,
  };
