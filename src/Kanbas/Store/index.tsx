import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/Reducer";
import assignmentsReducer from "../Courses/Assignments/Reducer"
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;