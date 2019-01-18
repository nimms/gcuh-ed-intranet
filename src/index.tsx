import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// nav bar
import Navigation from './components/Navigation';

// pages
import Calendar from './pages/Calendar';
import Forms from './pages/Forms';
import Guidelines from './pages/Guidelines';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PatientInfo from './pages/PatientInfo';
import Research from './pages/Research';
import Training from './pages/Training';

// redux imports
import { Provider } from 'react-redux';
import Store from './redux/store/Store';

// css imports
import './scss/custom.css';

const App = (
  <Provider store={Store}>
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/patient-info" component={PatientInfo} />
          <Route path="/forms" component={Forms} />
          <Route path="/research" component={Research} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/training" component={Training} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
