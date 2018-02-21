import  { combineReducers } from 'redux';
import wishlists from './wishlistreducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    wishlists,
    form: formReducer
});