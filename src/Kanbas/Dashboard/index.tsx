import React, { useState } from "react";
import { Link } from "react-router-dom";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <div className="row">
        <div className="row">
          <div className="col-md-6">
            <h5>Course Name</h5>
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <h5>Course Number</h5>
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <h5>Start Date</h5>
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
            <h5>End Date</h5>
            <input
              value={course.endDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-secondary float-end"
              onClick={updateCourse}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{
                    height: 150,
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
