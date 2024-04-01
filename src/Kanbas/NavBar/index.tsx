import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { KanbasNavigationMin } from "../Navigation";
import { CourseNavigationMin } from "../Courses/Navigation";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [kanbasCollapse, setKanbasCollapse] = useState(false);
  const [courseCollapse, setCourseCollapse] = useState(false);
  const toggleKanbasCollapse = () => {
    if (!courseCollapse) {
      setKanbasCollapse(!kanbasCollapse);
    }
  };

  const toggleCourseCollapse = () => {
    if (!kanbasCollapse) {
      setCourseCollapse(!courseCollapse);
    }
  };

  const CoursesNav = () => {
    const { pathname } = useLocation()
  
    if (pathname.includes("ourse")) {
      return (
        <div className="col-2 ms-auto">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCourseCollapse}
            aria-expanded={courseCollapse}
            aria-label="Toggle navigation"
          >
            <FaChevronDown />
          </button>
        </div>
      )
    } else {
      return <></>
    }
  }
  return (
    <div className="pos-f-t">
      <div className={`collapse ${kanbasCollapse ? 'show' : ''}`} id="navbarToggleKanbas">
        <div>
          <KanbasNavigationMin />
        </div>
      </div>
      <div className={`collapse ${courseCollapse ? 'show' : ''}`} id="navbarToggleCourse">
        <div>
          <CourseNavigationMin />
        </div>
      </div>
      <nav className="navbar wd-kanbas-navbar navbar-dark d-block d-md-none">
        <div className="row">
          <div className="col-2">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleKanbasCollapse}
              aria-expanded={kanbasCollapse}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <CoursesNav />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
