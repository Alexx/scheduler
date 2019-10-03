const scheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_SHIFT":
      return state;
    case "CREATE_SHIFT_ERROR":
      return state;
    default:
      return state;
  }
};

export default scheduleReducer;
