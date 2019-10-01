export const createEmployee = employee => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
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
