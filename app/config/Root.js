import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Greeting from '../components/routes/Greeting';
import Memory from "../components/routes/Memory";
import Ending from "../components/routes/Ending";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
        <Route path="/memory" component={Memory} />
        <Route path="/ending" component={Ending} />
      </Switch>
    </Router>
  );
};

export default Root;
