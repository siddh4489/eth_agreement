import {DECREMENT_COUNTER, INCREMENT_COUNTER,RESET} from '../actionType';

const initialState = {
    mathVal: 0,
  };
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return Object.assign({}, state, { mathVal: action.payload });
        case DECREMENT_COUNTER:
            return Object.assign({}, state, { mathVal: action.payload });
        case RESET:
            return Object.assign({}, state, { mathVal: action.payload });
        default:
            return state;
    }
};

export default counterReducer;
