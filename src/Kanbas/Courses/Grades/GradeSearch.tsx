function GradeSearch() {
    return (
        <>
            <div className="row m-0 p-0">
                <div className="col-md-6 pb-2 ps-0 m-0">
                    <h4>Student Names</h4>
                    <select className="form-select p-2">
                        <option><i className="fa-solid fa-search"></i> Search Students</option>
                    </select>
                </div>
                <div className="col-md-6 pb-2 ps-0 m-0">
                    <h4>Assignment Names</h4>
                    <select className="form-select p-2">
                        <option><i className="fa-solid fa-search"></i> Search Assignments</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-light mt-2 mb-2"><i className="fa-solid fa-filter"></i>Apply Filters</button>
        </>
    )
}
export default GradeSearch