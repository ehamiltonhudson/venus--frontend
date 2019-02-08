import { combineReducers } from 'redux';
import suns from './sunReducer';
// import email from './userReducer';
// import password from './userReducer';
import users from './userReducer';
// import currentUser from './userReducer';
import matches from './matchReducer';

const rootReducer = combineReducers({
  suns,
  // equivalent to suns:suns (where first suns is what is spread to state
  // in sun Reducer(?) and seconds suns is a key I can call from initialState(?)
  // -- must have access to that key within the current component / state
  // email,
  // password,
  users,
    // equivalent to users:users
  matches,
  // equivalent to matches:matches

})

export default rootReducer;
