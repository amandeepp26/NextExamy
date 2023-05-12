import { combineReducers } from 'redux';

import session from '../StudentModule/auth/session';
import signin from '../StudentModule/auth/signin';

export default combineReducers({
  session,
  signin,
});
