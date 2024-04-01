import { Link, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People", "Settings"];
    const { pathname } = useLocation();
    return (
        <ul className="wd-navigation d-none d-md-block">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
}

function CourseNavigationMin() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People", "Settings"];
    const { pathname } = useLocation();
    return (
        <ul className="wd-navigation d-block d-md-none">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
}
export { CourseNavigation, CourseNavigationMin};