import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./js/layout";
import routes from "./js/routes";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                path={route.path}
                                exact={route.exact}
                                key={index}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
