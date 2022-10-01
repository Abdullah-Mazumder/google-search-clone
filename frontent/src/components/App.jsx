import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
