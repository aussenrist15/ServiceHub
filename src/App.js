import { Home } from "./Common/Components/Home";
import "./App.css";
import { Profile } from "./Common/Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="Container">
        <Switch>
          <Route path="/landing" exact>
            <Home />
          </Route>
          <Route path="/" exact>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
