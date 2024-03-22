import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../Store";
import { setassignment, updateassignment, addassignment } from "../Reducer";
function AssignmentEditor() {
  const { courseId } = useParams();
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSave = () => {
    if (assignment.new == true){
      dispatch(addassignment({...assignment, course: courseId, new: false}))
    } else {
      dispatch(updateassignment(assignment))
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h2>Edit Assignment</h2>
      <div className="col-md-10 flex-fill">
        <hr />
        <div className="col-9">
          <h5>Assignment Name</h5>
          <input type="text" className="form-control" value={assignment?.title} placeholder="Assignment Name" 
          onChange={(e) => dispatch(setassignment({ ...assignment, title: e.target.value }))}/>
          <textarea className="form-control mt-4" cols={50} rows={5} placeholder="Assignment Details" 
          onChange={(e) => dispatch(setassignment({ ...assignment, description: e.target.value }))} value={assignment.description}/>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2">Points</h5>
          </div>
          <div className="col-6">
            <input type="number" className="form-control" min="0" max="100" value={assignment.points} placeholder="Score" 
            onChange={(e) => {
              if (isNaN(parseInt(e.target.value))) {
                dispatch(setassignment({ ...assignment, points: "" }));
              }
              const newValue = parseInt(e.target.value, 10);
              if (newValue >= 0 && newValue <= 100) {
                dispatch(setassignment({ ...assignment, points: newValue }));
              }
            }}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <h5 className="float-end mt-2"></h5>
          </div>
          <div className="col-6">
            <div>
              <h5 className="mt-4">Due</h5>
              <input type="date" className="form-control" value={assignment.due} 
              onChange={(e) => dispatch(setassignment({ ...assignment, due: e.target.value }))}/>
              <div className="row mt-4">
                <div className="col-6">
                  <h5>Available from</h5>
                  <input type="date" className="form-control" value={assignment.from} 
                  onChange={(e) => dispatch(setassignment({ ...assignment, from: e.target.value }))}/>
                </div>
                <div className="col-6">
                  <h5>Until</h5>
                  <input type="date" className="form-control" value={assignment.until} 
                  onChange={(e) => dispatch(setassignment({ ...assignment, until: e.target.value }))}/>
                </div>
              </div>
            </div>
            <div className="mt-4">
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
    </div>
  );
}
export default AssignmentEditor;
