import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import * as React from 'react';
import Home from "../components/pages/Home";
import BlogPost from "../components/pages/BlogPost";

interface IRoutesProps {
}

const Routes: React.FunctionComponent<IRoutesProps> = (props) => {
    return (<Router>
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/post/:postID">
                <BlogPost />
            </Route>
        </Switch>
    </Router>
    )
};

export default Routes;
