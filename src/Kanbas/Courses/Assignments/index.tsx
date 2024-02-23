import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control w-75" placeholder="Search for Assignment" />
                </div>
                <div className="col-6">
                    <button className="btn btn-light float-end m-1"><FaEllipsisV className="ms-2" /></button>
                    <button className="btn btn-danger float-end m-1">+ Assignment</button>
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
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;