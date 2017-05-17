import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import Project from './Project';

const Projects = ({projects}) => {

  if (!projects || projects.length === 0) return (
    <p className='no-projects'>No projects 🙌🏼 <span className='no-projects-add-one'>(you can add one above)</span></p>
  );

  return (
    <ul>
      {
        projects.map(
          p => (
            <Project
              {...p}
              key={p._id}
            />
          )
        )
      }
    </ul>
  );
};

Projects.propTypes = {
  projects: PropTypes.observableArray.isRequired,
};

export default inject(
  ({store}) => {
    return {projects: store.projects};
  }
)(
  observer(Projects)
);
