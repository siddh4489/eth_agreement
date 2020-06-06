import {DECREMENT_COUNTER, INCREMENT_COUNTER,RESET,MYNAME} from '../actionType';

const initialState = {
    mathVal: 0,
    name: 'raj',
  };
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return Object.assign({}, state, { mathVal: action.payload });
        case DECREMENT_COUNTER:
            return Object.assign({}, state, { mathVal: action.payload });
        case RESET:
            return Object.assign({}, state, { mathVal: action.payload,name:action.payloadName});
        case MYNAME:
            return Object.assign({}, state, { name: action.payload });    
        default:
            return state;
    }
};

export default counterReducer;
