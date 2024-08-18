import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../reducer/studentReducer";

const rootReducer = {

  studentprofilestate: studentReducer,


};


const store = configureStore({
  reducer : rootReducer
});
export default store;