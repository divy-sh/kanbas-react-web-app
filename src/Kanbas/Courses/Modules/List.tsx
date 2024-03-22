import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaTrash, FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, } from "./Reducer";
import { KanbasState } from "../../Store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <li className="list-group-item">
        <h5>Module Name</h5>
        <input className="form-control" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <h5>Module Description</h5>
        <textarea className="form-control" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <button className="btn btn-primary mt-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button className="btn btn primary mt-2" onClick={() => dispatch(updateModule(module))}>Update</button>
      </li>
      <div className="wd-modules">
        <ul className="list-group wd-modules">

          {moduleList.filter((module) => module.course === courseId).map((module, index) => (
            <li key={index} className="list-group-item">
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaEdit onClick={() => dispatch(setModule(module))}/>
                  <FaTrash className="ms-2" onClick={() => dispatch(deleteModule(module._id))}/>
                  <FaCheckCircle className="ms-2 text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>

              <ul className="list-group">
                <li className="list-group-item" key={index}>
                  <FaEllipsisV className="me-2" />
                  {module.description}
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              </ul>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ModuleList;