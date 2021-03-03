import { Home } from "./Common/Components/Home";
import "./App.css";
import "./Common/Components/Dashboard/assets/plugins/nucleo/css/nucleo.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Common/Components/Dashboard/assets/scss/argon-dashboard-react.scss";
import { Profile } from "./Common/Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Common/Components/Dashboard/Dashboard"

import { User } from "./Common/Components/User";
function App() {
  return (
    <div className="Container">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />}></Route>
      </Switch>
    </div>
  );
}

export default App;
