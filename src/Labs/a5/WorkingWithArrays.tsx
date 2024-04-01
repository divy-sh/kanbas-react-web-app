import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [errorMessage, setErrorMessage] = useState(null);
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: any) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/get/${id}`);
    setTodo(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <a className="btn btn-primary" href={`${API}/get/${todo.id}`}>
        Get Todo by ID
      </a>
      <input
        className="form-control"
        type="number"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <h3>Filtering Array Items</h3>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a className="btn btn-danger" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <h3>Updating an Item in an Array</h3>
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>
      <input
        className="form-control"
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed to {todo.title}
      </a>
      <input
        className="form-check"
        type="checkbox"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update description to {todo.title}
      </a>
      <input
        className="form-control"
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <div className="col-md-6">
        <input
          className="form-control mt-2"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
        />
        <input
          className="form-control mt-2"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <textarea
          className="form-control mt-2"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <input
          className="form-control mt-2"
          value={todo.due}
          type="date"
          onChange={(e) =>
            setTodo({
              ...todo,
              due: e.target.value,
            })
          }
        />
        <label>
          <input
            className="form-check"
            checked={todo.completed}
            type="checkbox"
            onChange={(e) =>
              setTodo({
                ...todo,
                completed: e.target.checked,
              })
            }
          />
          Completed
        </label>
        {errorMessage && (
          <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
        )}
        <button className="btn btn-primary col-12" onClick={postTodo}>
          Post Todo
        </button>

        <button className="btn btn-success col-12 mt-2" onClick={updateTodo}>
          Update
        </button>
        <ul className="list-group col-12 mt-2">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <div className="row">
                <div className="col-6">
                  <span>{todo.title}</span>
                  <br />
                  <span>{todo.description}</span>
                  <br />
                  <span>{todo.due}</span>
                </div>
                <div className="col-6">
                  <input
                    className="ms-2"
                    checked={todo.completed}
                    type="checkbox"
                    readOnly
                  />
                  <button
                    className="btn btn-danger float-end"
                    onClick={() => removeTodo(todo)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-warning float-end"
                    onClick={() => fetchTodoById(todo.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default WorkingWithArrays;
