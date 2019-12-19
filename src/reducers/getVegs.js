export default (state = {}, action) => {
  switch (action.type) {
    case "GET_VEGS":
      return { ...action.payload };
    default:
      return state;
  }
};
