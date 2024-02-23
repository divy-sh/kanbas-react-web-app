import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css"

function CourseBreadcrumb() {
    const breadcrumbs = useBreadcrumbs();
    const filteredBreadcrumbs = breadcrumbs.filter(({ key }) => !key.match("Home"));
    return (
        <div className="bread-crumb m-2">
            <HiMiniBars3/>
            {filteredBreadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink key={match.pathname} to={match.pathname} style={{color:"red", textDecoration:"none"}}>
                    /{breadcrumb}
                </NavLink>
            ))}
        </div>
    );
};

export default CourseBreadcrumb;