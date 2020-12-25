import { combineReducers } from 'redux';

import uploadReducer from './components/upload/upload.reducer';
import headerReducer from './components/header/header.reducer';

const reducer = combineReducers({
  uploadReducer,
  headerReducer,
});

export default reducer;
