import React, {Component} from 'react';

import DevTools from 'mobx-react-devtools';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import Home from './Home';
import EditProject from './EditProject';

import {observer, inject} from 'mobx-react';
import {object} from 'prop-types';

class App extends Component {

  renderEditProject = ({match}) => {
    const {id} = match.params;

    const {getProjectById} = this.props.store;

    getProjectById(id);

    return <EditProject id={id} />;
  }

  renderHome = () => {

    const {getProjects} = this.props.store;

    getProjects();

    return <Home />;

  }

  render() {
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
                render={this.renderHome}
              />

              <Route
                path='/edit/:id'
                render={this.renderEditProject}
              />

              <Route
                render={() => <Redirect to='/' />}
              />

            </Switch>
        </Router>

      </section>
    );
  }

}

App.propTypes = {
  store: object.isRequired
};

export default inject(`store`)(observer(App));
