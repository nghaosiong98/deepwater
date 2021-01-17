import {
  SET_PAGE_INDEX,
} from './navbar.action';

const initialState = {
  pageIndex: '0',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.index,
      };
    default:
      return state;
  }
};

export default reducer;
