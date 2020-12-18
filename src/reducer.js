import { combineReducers } from 'redux';

import uploadReducer from './components/upload/upload.reducer';

const reducer = combineReducers({
  uploadReducer,
});

export default reducer;
