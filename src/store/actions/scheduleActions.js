export const createShift = shift => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const managerId = getState().firebase.auth.uid;
    firestore
      .collection("shifts")
      .add({
        ...shift,
        managerId: managerId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_SHIFT", shift });
      })
      .catch(err => {
        dispatch({ type: "CREATE_SHIFT_ERROR", err });
      });
  };
};
