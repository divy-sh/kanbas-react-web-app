import { FaBell, FaBullhorn, FaCalendarCheck, FaCheckCircle, FaCreativeCommonsSa, FaCrosshairs, FaFileImport } from "react-icons/fa";
import { FaBan, FaCalendarDays, FaChartSimple } from "react-icons/fa6";

function HomeStatus() {
    return (
        <div className="d-none d-lg-block">
            <h4>Course Status</h4>
            <table className="w-100">
                <tbody>
                    <tr>
                        <td>
                            <button className="btn btn-light w-100">
                                <FaBan/> Unpublish
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success w-100" disabled>
                                <FaCheckCircle/> Published
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="status-button btn btn-light w-100"><FaFileImport /> Import Existing Content</button>
            <button className="status-button btn btn-light w-100"><FaCreativeCommonsSa /> Import from commons</button>
            <button className="status-button btn btn-light w-100"><FaCrosshairs /> Choose home page</button>
            <button className="status-button btn btn-light w-100"><FaChartSimple /> view course stream</button>
            <button className="status-button btn btn-light w-100"><FaBullhorn /> New announcement</button>
            <button className="status-button btn btn-light w-100"><FaChartSimple /> New analytics</button>
            <button className="status-button btn btn-light w-100"><FaBell /> view course notifications</button>
            <div>
                <h4>To Do</h4>
            </div>
            <hr />
            <a href="" style={{ color: "red", textDecoration: "none" }} > <FaCalendarCheck/> Grade A1 - ENV + HTML</a>
            <br />100 Points | Jan 26 at 6:00 PM<br />
            <div className="pt-4">
                <h4>Coming Up</h4>
                <a href="" style={{ color: "red", textDecoration: "none" }}><FaCalendarDays/> View Calendar</a>
            </div>
            <hr />
            <a href="" style={{ color: "red", textDecoration: "none" }}> <FaCalendarCheck/> Lecture CS5610-07-Spring-24</a>
            <br />Jan 26 at 6:00 PM<br />

            <a href="" style={{ color: "red", textDecoration: "none" }}> <FaCalendarCheck/> Lecture CS5610-07-Spring-24</a>
            <br />Feb 2 at 6:00 PM<br />

            <a href="" style={{ color: "red", textDecoration: "none" }}><FaCalendarCheck/> Lecture CS5610-07-Spring-24</a>
            <br />Feb 9 at 6:00 PM<br />

        </div>
    )
}

export default HomeStatus