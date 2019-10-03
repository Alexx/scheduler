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

export const deleteEmployee = employeeId => {
  console.log(employeeId);

  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("employees")
      .doc(employeeId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_EMPLOYEE", employeeId });
      })
      .catch(err => {
        dispatch({ type: "DELETE_EMPLOYEE_ERROR", err });
      });
  };
};
