import ModuleList from "./List";
function Modules() {
  return (
    <div>
      <div className="col-md-12">
        <div className="d-flex justify-content-end">
          <div>
            <button className="btn btn-light">Collapse All</button>
          </div>
          <div>
            <button className="btn btn-light">Expand All</button>
          </div>
          <div>
            <button className="btn btn-light">View Progress</button>
          </div>
          <div>
            <select className="form-select">
              <option>Publish All</option>
              <option>Unpublish All</option>
              <option>Unpublish All</option>
            </select>
          </div>
          <div>
            <button className="btn btn-danger">+ Module</button>
          </div>
        </div>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;