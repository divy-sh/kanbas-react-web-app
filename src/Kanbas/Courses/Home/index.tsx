import Modules from "../Modules";
import HomeStatus from "./HomeStatus/HomeStatus";

function Home() {
    return (
        <div>
            <div className="row p-0 m-0">
                <div className="col-lg-9">
                    <Modules/>
                </div>
                <div className="col-lg-3">
                    <HomeStatus/>
                </div>
            </div>
        </div>
    );
}
export default Home;