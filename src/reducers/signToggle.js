export default (userId = null, action) => {
  switch (action.type) {
    case "SIGN_TOGGLE":
      return action.payload;
    default:
      return userId;
  }
};
