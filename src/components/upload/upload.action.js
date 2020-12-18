const UPLOAD = 'UPLOAD';
export const SET_UPLOADED_FILES = `${UPLOAD}/SET_UPLOADED_FILES`;
export const SET_RESULTS = `${UPLOAD}/SET_RESULTS`;
export const RESET_STATE = `${UPLOAD}/RESET_STATE`;

export const setUploadedFiles = (files) => ({
  type: SET_UPLOADED_FILES,
  files,
});

export const setResults = (results) => ({
  type: SET_RESULTS,
  results,
});

export const resetState = () => ({
  type: RESET_STATE,
});
