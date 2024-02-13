//Criação de Rotas
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../Pages/Login/LoginPage';
import DataTablePage from '../Pages/DataTable/DataTablePage';
import ErrorPage from '../Pages/Error/ErrorPage';

function RoutesApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/data" component={DataTablePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default RoutesApp;
