export const createEmployee = employee => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const managerId = getState().firebase.auth.uid;
    firestore
      .collection("employees")
      .add({
        ...employee,
        managerId: managerId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_EMPLOYEE", employee });
      })
      .catch(err => {
        dispatch({ type: "CREATE_EMPLOYEE_ERROR", err });
      });
  };
};
