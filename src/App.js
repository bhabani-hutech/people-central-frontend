import './App.css';
import constants from "./constants/Constants";
import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const Loginbase = lazy(() => import("./pages/Loginbase/Loginbase"));
// const Onboarding = lazy(() => import("./pages/Onboarding/Onboarding"));
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
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
