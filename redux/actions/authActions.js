import React, {Component} from 'react';
import {LOGIN} from '../actionType';
//import { useAuth0 } from '../../contexts/auth0-context';
const login = (type) => {
    
    return (dispatch) => {
        dispatch({type: LOGIN, payload: 'Login Details'});
    };
};

export default {login,};
