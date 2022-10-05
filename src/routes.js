import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


//Pages
import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LoanTable from "./pages/LoanTable";
// import Cards from "./pages/Cards";
// import Charts from "./pages/Charts";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={SignIn} /> */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/loan-table" component={LoanTable} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
