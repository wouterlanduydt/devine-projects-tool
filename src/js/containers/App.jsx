import React from 'react';

import {PropTypes as MPropTypes, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import Home from './Home';
import EditProject from './EditProject';

const App = ({store}) => {

  const {name} = store;
  console.log(name);

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <header>
        <h1>Devine-Projects</h1>
      </header>

      <Router>
        <section>

          <Switch>

            <Route
              exact path='/'
              component={Home}
            />

            <Route
              exact path='/edit'
              component={EditProject}
            />

            <Route
              render={() => <Redirect to='/' />}
            />

          </Switch>

        </section>
      </Router>

    </section>
  );

};

App.propTypes = {
  store: MPropTypes.observableObject.isRequired
};

export default observer(App);
