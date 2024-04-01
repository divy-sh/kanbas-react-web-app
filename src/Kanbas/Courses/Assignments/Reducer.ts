import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
import Assignments from ".";


const initialState = {
  assignments: db.assignments,
  assignment: { _id: "", course: "", title: "", description: "", points: 0, due: new Date().toISOString().split('T')[0], from: new Date().toISOString().split('T')[0], until: new Date().toISOString().split('T')[0], new: true},
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addassignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteassignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateassignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setassignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addassignment, deleteassignment,
  updateassignment, setassignment } = assignmentsSlice.actions;
export const initialStateExport = initialState;
export default assignmentsSlice.reducer;