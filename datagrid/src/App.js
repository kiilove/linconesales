import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ClientCompList from "./components/clientCompany/ClientCompList";
import Dashboard from "./components/dashboard/Dashboard";
import MarketingDetail from "./components/marketing/MarketingDetail";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const isLogin = true;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {isLogin ? <Home child={<Dashboard />} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/clientCompList">
          <Home child={<ClientCompList />} />
        </Route>
        <Route path="/marketingDetail/:uid">
          <Home child={<MarketingDetail />} />
        </Route>
        <Route exact path="/marketingDetail">
          <Home child={<MarketingDetail />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
