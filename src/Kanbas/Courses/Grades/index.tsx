import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import GradeSearch from "./GradeSearch";
function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="m-2">
            <GradeSearch />
            <div className="table table-striped table-bordered">
                <table className="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>Student Name</th>
                        {as.map((assignment) => (<th style={{ textAlign: "center" }}>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return (
                                                <td>
                                                    <input type="number" max="100" min="0" style={{ textAlign: "center", border: "none", backgroundColor: "transparent" }} className="form-control" value={grade?.grade || ""} />
                                                </td>
                                            )
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;