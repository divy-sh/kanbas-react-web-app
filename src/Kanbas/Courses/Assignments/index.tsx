import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../Store";
import { setassignment, initialStateExport, deleteassignment } from "./Reducer";
import { useNavigate } from 'react-router-dom';


function Assignments() {
    const { courseId } = useParams();
    const assignmentList: any = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editAssignment = () => navigate(`/Kanbas/Courses/${courseId}/Assignments/${null}`);
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control w-75" placeholder="Search for Assignment" />
                </div>
                <div className="col-6">
                    <button className="btn btn-light float-end m-1"><FaEllipsisV className="ms-2" /></button>
                    <button className="btn btn-danger float-end m-1" onClick={() => { dispatch(setassignment(initialStateExport.assignment)); editAssignment() }}>+ Assignment</button>
                    <button className="btn btn-light float-end m-1">+ Group</button>
                </div>
            </div>
            <ul className="wd-modules list-group">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <span className="rounded-div" style={{ padding: "5px", border: "1px solid black", borderRadius: "50px" }}>40% of Total</span>
                            <FaCheckCircle className="text-success mt-1" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.filter((assignment: any) => assignment.course === courseId).map((assignment: any) => (
                            <li key={assignment._id} className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link onClick={() => dispatch(setassignment(assignment))}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaTrash className="ms-2 me-2" onClick={() => dispatch(deleteassignment(assignment._id))} />
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;