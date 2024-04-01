import { FaGlasses } from "react-icons/fa"
import CourseBreadcrumb from "./BreadCrumb"

function TopBar() {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-md-6 m-0 p-0">
                    <CourseBreadcrumb />
                </div>
                <div className="col-md-6 m-0 p-0">
                    <button className="btn btn-light float-end p-2 m-2">
                        <FaGlasses />
                        <span> Student View</span>
                    </button>
                </div>
            </div>
            <hr className="md-1 mt-0"/>
        </div>
    )
}

export default TopBar