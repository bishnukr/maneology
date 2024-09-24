export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

//remove items
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

//remove Individual Item
export const REMOVE = (id) => {
  return {
    type: "RMV_ONE",
    payload: id,
  };
};

//display Individual Item
export const DISPLAY = (id) => {
  return {
    type: "DISPLAY_ONE",
    payload: id,
  };
};

export const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
});
