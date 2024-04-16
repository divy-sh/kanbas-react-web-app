import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`,
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const [module, setModule] = useState({
    id: "module",
    name: "pizza",
    description: "moduledesc",
    course: "pizza",
  });
  const ASSIGNMENT_URL = `${process.env.REACT_APP_API_BASE}/a5/assignment`;
  const MODULE_URL = `${process.env.REACT_APP_API_BASE}/a5/module`;

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={process.env.REACT_APP_API_BASE + "/a5/assignment"}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary"
        href={process.env.REACT_APP_API_BASE + "/a5/assignment/title"}
      >
        Get Title
      </a>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button className="btn btn-primary" onClick={updateTitle}>
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-primary" onClick={fetchAssignment}>
        Fetch Assignment
      </button>
      <input
        className="form-control"
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <h4>Modifying Assignment Score</h4>
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        className="form-control"
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <h4>Modifying Properties</h4>
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        className="form-check"
        type="checkbox"
        onChange={() =>
          setAssignment({ ...assignment, completed: !assignment.completed })
        }
        checked={assignment.completed}
      />
      <h4>Get Module</h4>
      <a className="btn btn-primary" href={process.env.REACT_APP_API_BASE + "/a5/module"}>
        Get Module
      </a>
      <h4>Get Module Name</h4>
      <a
        className="btn btn-primary"
        href={process.env.REACT_APP_API_BASE + "/a5/module/name"}
      >
        Get Module Name
      </a>
      <h4>Modifying Module Name</h4>
      <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input
        className="form-control"
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
    </div>
  );
}
export default WorkingWithObjects;
