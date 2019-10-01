const scheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_SHIFT":
      console.log("created shift", action.shift);
      return state;
    case "CREATE_SHIFT_ERROR":
      console.log("create shift error", action.err);
      return state;
    default:
      return state;
  }
};

export default scheduleReducer;
