export const updateList = list => {
  return {
    type: "UPDATE_LIST",
    payload: list
  };
};

export const updateSortStatus = status => {
  return {
    type: "SORT_STATUS",
    payload: status
  };
};
