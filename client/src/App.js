import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Ledger from "./components/Business/Ledger";
import SalesType1 from "./components/Business/print/SalesType1";
import Sales from "./components/Business/Sales";
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
        <Route path="/salesPrint">
          <SalesType1 />
        </Route>
        <Route path="/clientCompList">
          <Home child={<ClientCompList />} />
        </Route>
        <Route path="/ledger">
          <Home child={<Ledger />} />
        </Route>
        <Route path="/sales">
          <Home child={<Sales />} />
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
