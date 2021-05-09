import Dashboard from "./Common/Components/Dashboard/Dashboard"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Home } from "./Common/Components/Home";
import { PlaceDetails } from "./Common/Components/PlaceDetails";
import "./App.css";
import "./Common/Components/Dashboard/assets/plugins/nucleo/css/nucleo.css";
import "./Common/Components/Dashboard/assets/scss/argon-dashboard-react.scss";
import { Switch, Route } from "react-router-dom";

import { User } from "./Common/Components/User";
function App() {
  return (
    <div className="Container">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/placedetails" component={PlaceDetails}></Route>
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />}></Route>
      </Switch>
    </div>
  );
}

export default App;
