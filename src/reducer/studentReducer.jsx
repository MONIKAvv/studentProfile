import { createSlice } from "@reduxjs/toolkit";
import { StudentProfileData } from "../data/Data";

const StudentProfileSlice = createSlice({
  name: "firstaidregister",
  initialState: StudentProfileData,
  reducers: {
    addFirstaid: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
  },
});

export const { addfirstaid } = StudentProfileSlice.actions;
export default StudentProfileSlice.reducer;
