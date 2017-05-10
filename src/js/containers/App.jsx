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
        <h1>Devine Projectmanager</h1>
      </header>

      <p>The Devine Project Manager helps you to keep track of your projects at a glance. See when the deadlines come closer. You can also store anything you want in notes. For example the questions you want to ask on consult, your personal to-dos, feedback,...</p>

      <Router>
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
      </Router>

    </section>
  );

};

App.propTypes = {
  store: MPropTypes.observableObject.isRequired
};

export default observer(App);
