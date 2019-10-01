import authReducer from "./authReducer";
import employeeReducer from "./employeeReducer";
import scheduleReducer from "./scheduleReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  shifts: scheduleReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
