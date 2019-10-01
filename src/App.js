import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import CreateEmployee from "./components/employees/CreateEmployee";
import Schedule from "./components/schedule/Schedule";
import CreateShift from "./components/schedule/CreateShift";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/employee/:id" component={EmployeeDetails} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create_employee" component={CreateEmployee} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/create_shift" component={CreateShift} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
