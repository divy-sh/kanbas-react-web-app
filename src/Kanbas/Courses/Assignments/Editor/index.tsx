import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <div className="col-md-10 flex-fill">
        <hr />
        <h5>Assignment Name</h5>
        <input type="text" className="form-control" value={assignment?.title} placeholder="Assignment Name" />
        <textarea className="form-control mt-4" cols={50} rows={5} placeholder="Assignment Details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus rerum reprehenderit
          voluptatum neque eum repellendus ullam eos adipisci? Ratione id dicta quo natus earum
          dignissimos similique quam qui numquam exercitationem.
        </textarea>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2">Points</h5>
          </div>
          <div className="col-6">
            <input type="number" className="form-control" min="0" max="100" value="100" placeholder="Score" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2">Assignment Group</h5>
          </div>
          <div className="col-6">
            <select className="form-control">
              <option>Assignments</option>
              <option>Quizzes</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2">Display Grade As</h5>
          </div>
          <div className="col-6">
            <select className="form-control">
              <option>Percentage</option>
              <option>Absolute Value</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2"></h5>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2">Assign</h5>
          </div>
          <div className="col-6">
            <div>
              <h5 className="mt-2">Assign To</h5>
              <select className="form-control">
                <option>Everyone</option>
                <option>None</option>
              </select>
              <h5 className="mt-4">Due</h5>
              <input type="date" className="form-control" value="08/30/2024" />
              <div className="row mt-4">
                <div className="col-6">
                  <h5>Available from</h5>
                  <input type="date" className="form-control" value="08/30/2024" />
                </div>
                <div className="col-6">
                  <h5>Until</h5>
                  <input type="date" className="form-control" value="08/30/2024" />
                </div>
              </div>
            </div>
            <button className="mb-5 form-control btn btn-light">
              + Add
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="form-check col-6">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Do not count this assignment towards the final grade
            </label>
          </div>
          <div className="col-6">
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
              Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
