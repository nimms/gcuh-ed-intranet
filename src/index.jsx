// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//nav bar
import Navigation from './components/Navigation';

//pages
import Calendar from './pages/Calendar';
import Forms from './pages/Forms';
import Guidelines from './pages/Guidelines';
import Home from './pages/Home';
import PatientInfo from './pages/PatientInfo';
import Research from './pages/Research';
import Training from './pages/Training';
import NotFound from './pages/NotFound';

// css imports
//import 'bootstrap/dist/css/bootstrap.css';
import './scss/custom.scss';
import './index.css';

const routing = (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Guidelines" component={Guidelines} />
        <Route path="/patient-info" component={PatientInfo} />
        <Route path="/forms" component={Forms} />
        <Route path="/research" component={Research} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/training" component={Training} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
