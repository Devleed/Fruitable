export default (state = null, action) => {
  switch (action.type) {
    case "GET_ITEM":
      return action.payload;
    default:
      return state;
  }
};
