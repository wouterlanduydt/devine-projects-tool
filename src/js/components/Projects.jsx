import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import Project from './Project';

const Projects = ({projects}) => {

  return (
    <ul>
      {
        projects.map(
          p => (
            <Project
              {...p}
              key={p.id}
            />
          )
        )
      }
    </ul>
  );
};

Projects.propTypes = {
  projects: PropTypes.observableArray.isRequired
};

export default inject(
  ({store}) => {
    return {projects: store.projects};
  }
)(
  observer(Projects)
);
