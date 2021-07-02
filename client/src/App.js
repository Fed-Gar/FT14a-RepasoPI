import Home from "./views/Home"
import { Route, Switch } from "react-router-dom"
import Nav from "./components/Nav";
import Page from "./views/Page";
import Add from "./views/Add";
function App() {
  return (
    <>
      <Route path="/" component={Nav} />
      <div className="container content">
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/pages/add" exact component={Add} />
          <Route path="/pages/:urlTitle" exact component={Page} />
        </Switch>
      </div>
      <hr />
      <div id="footer" className="container text-muted">
        Blog by Henry
      </div>
    </>
  );
}

export default App;
