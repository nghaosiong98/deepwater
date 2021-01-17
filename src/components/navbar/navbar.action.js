const HEADER = 'HEADER';

export const SET_PAGE_INDEX = `${HEADER}/SET_PAGE_INDEX`;

export const setPageIndex = (index) => ({
  type: SET_PAGE_INDEX,
  index,
});
