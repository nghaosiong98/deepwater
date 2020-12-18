import {
  SET_UPLOADED_FILES,
  SET_RESULTS,
  RESET_STATE,
} from './upload.action';

const initialState = {
  uploadedFiles: [],
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOADED_FILES:
      return {
        ...state,
        uploadedFiles: action.files,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.results,
      };
    case RESET_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
