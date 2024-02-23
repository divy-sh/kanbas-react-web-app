import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelopeOpenText, FaClock, FaCreativeCommonsSa } from "react-icons/fa";
import { FaComputer, FaN, FaCircleQuestion } from "react-icons/fa6";

const links = [
  { label: " ", icon: <FaN className="fs-2" />, },
  { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
  { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
  { label: "Courses", icon: <FaBook className="fs-2" /> },
  { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
  { label: "Inbox", icon: <FaEnvelopeOpenText className="fs-2" /> },
  { label: "History", icon: <FaClock className="fs-2" /> },
  { label: "Studio", icon: <FaComputer className="fs-2" /> },
  { label: "Commons", icon: <FaCreativeCommonsSa className="fs-2" /> },
  { label: "Help", icon: <FaCircleQuestion className="fs-2" /> },
];

function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation d-none d-md-block">
      {links.map((link, index) => (
        <li key={index} className={`${pathname.includes(link.label) ? "wd-active" : ""} ${link.label !== "Account" || pathname.includes(link.label) ? "red-text" : ""}`}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}

function KanbasNavigationMin() {
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index} className={`${pathname.includes(link.label) ? "wd-active" : ""} ${link.label !== "Account" || pathname.includes(link.label) ? "red-text" : ""}`}>
            <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export { KanbasNavigation, KanbasNavigationMin };