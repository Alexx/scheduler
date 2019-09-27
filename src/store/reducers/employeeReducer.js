const initState = {
  employees: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};

const employeeReducer = (state = initState, action) => {
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
