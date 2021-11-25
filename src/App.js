import './App.css';
import constants from "./constants/Constants";
import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const Loginbase = lazy(() => import("./pages/Loginbase/Loginbase"));
const EmpDashboard = lazy(() => import("./pages/EmpDashboard/EmpDashboard"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const {
  ROUTES: {
    LOGIN,
    FORGOTPASSWORD,
    RESET,
    DASHBOARD,
    CREATE,
    ONBOADING,
    ACTIVATION,
    SETTING,
    PROFILE,
    DIRECTORY,
    EMPDASHBOARD,
    PAYSLIP,
  },
  LOADING,
} = constants;
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={LOADING}>
          <Switch>
            <Route exact path={LOGIN} component={Loginbase} />
            <Route path={FORGOTPASSWORD} component={Loginbase} />
            <Route path={RESET} component={Loginbase} />
            <Route path={CREATE} component={Loginbase} />
            <Route path={ACTIVATION} component={Loginbase} />
            <Route path={DASHBOARD} component={Dashboard} />
            <Route path={ONBOADING} component={Dashboard} />
            <Route path={SETTING} component={Dashboard} />
            <Route path={PAYSLIP} component={Dashboard} />
            <Route path={EMPDASHBOARD} component={EmpDashboard} />
            <Route path={PROFILE} component={EmpDashboard} />
            <Route path={DIRECTORY} component={EmpDashboard} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
