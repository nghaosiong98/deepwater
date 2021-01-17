import { combineReducers } from 'redux';

import uploadReducer from './components/upload/upload.reducer';
import navbarReducer from './components/navbar/navbar.reducer';

const reducer = combineReducers({
  uploadReducer,
  navbarReducer,
});

export default reducer;
