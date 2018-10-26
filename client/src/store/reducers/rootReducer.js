import {combineReducers} from 'redux';
import itemReducers from './itemReducers';

const rootReducer=combineReducers({
    item:itemReducers
});

export default rootReducer;