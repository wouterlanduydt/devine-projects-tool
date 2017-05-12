import React from 'react';

import DevTools from 'mobx-react-devtools';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import Home from './Home';
import EditProject from './EditProject';

const App = () => {

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <header>
        <h1>Devine Projectmanager</h1>
      </header>

      <Router>
          <Switch>

            <Route
              exact path='/'
              component={Home}
            />

            <Route
              path='/edit/'
              component={EditProject}
            />

            <Route
              render={() => <Redirect to='/' />}
            />

          </Switch>
      </Router>

    </section>
  );

};

export default App;
