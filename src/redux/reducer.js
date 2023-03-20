import { combineReducers } from 'redux';

import session from '../modules/auth/session';
import signin from '../modules/auth/signin';

export default combineReducers({
  session,
  signin,
});
