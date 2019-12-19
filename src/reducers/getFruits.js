export default (state = {}, action) => {
  switch (action.type) {
    case "GET_FRUITS":
      return { ...action.payload };
    default:
      return state;
  }
};
