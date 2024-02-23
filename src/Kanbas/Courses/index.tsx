import { Navigate, Route, Routes } from "react-router-dom";
import { CourseNavigation } from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import TopBar from "./TopBar";

function Courses() {
  return (
    <div>
      <div className="d-none d-md-block">
        <TopBar />
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-2 m-0 p-0">
          <CourseNavigation />
        </div>
        <div className="col-md-10 m-0 p-0">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom" element={<h1>Zoom</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<Grades />} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="Settings" element={<h1>Settings</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;