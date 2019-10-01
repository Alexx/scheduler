const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EMPLOYEE":
      console.log("created employee", action.employee);
      return state;
    case "CREATE_EMPLOYEE_ERROR":
      console.log("create employee error", action.err);
      return state;
    default:
      return state;
  }
};

export default employeeReducer;
