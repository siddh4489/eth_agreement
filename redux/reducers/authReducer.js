import {LOGIN} from '../actionType';

const initialState = {
    authDetail: 'LOG'
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { authDetail: action.payload });    
        default:
            return state;
    }
};

export default authReducer;
