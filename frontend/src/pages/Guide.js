import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import UserGuide from "../components/UserGuide";
import UserMaster from "../components/UserMaster";

const Guide = () => {
    const{ path, url } = useRouteMatch();

    return (
        <div>
            <Link to={`${url}/userGuide`}>userGuide</Link>
            <Link to={`${url}/userMaster`}>userMaster</Link>
            <Switch>
                <Route path={`${path}/userGuide`} component={UserGuide}/>
                <Route path={`${path}/userMaster`} component={UserMaster}/>
            </Switch>
        </div>
    )
}

export default Guide;