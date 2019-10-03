const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EMPLOYEE":
      return state;
    case "CREATE_EMPLOYEE_ERROR":
      return state;
    case "DELETE_EMPLOYEE":
      return state;
    case "DELETE_EMPLOYEE_ERROR":
      return state;
    default:
      return state;
  }
};

export default employeeReducer;
