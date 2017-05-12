import React from 'react';
import {Link} from 'react-router-dom';

import {string, number} from 'prop-types';

const Project = ({id, name, deadline, consultday, note}) => {
  return (
    <li className='project-container'>
      <div className='project-title-container'>
        <p className='project-title'><strong>{name} consult is {consultday}, and there are THREE DAYS left until the {deadline}.</strong></p>
        <Link to={`/edit/${id}`} className='link'>
          <p className='project-edit'>✏️</p>
        </Link>
      </div>
      <p className='project-notes'>{note}</p>
    </li>
  );
};

Project.propTypes = {
  name: string.isRequired,
  deadline: string.isRequired,
  consultday: string.isRequired,
  note: string.isRequired,
  id: number.isRequired
};

export default Project;
