import { Home } from "./Common/Components/Home";
import "./App.css";
import { Profile } from "./Common/Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { User } from "./Common/Components/User";
function App() {
  return (
    <div className="Container">
      <Switch>
        <Route path="/landing" exact component={Home}></Route>
        <Route path="/user" component={User}></Route>
      </Switch>
    </div>
  );
}

export default App;
