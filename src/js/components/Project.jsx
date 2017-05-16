import React from 'react';
import {Link} from 'react-router-dom';

import {string} from 'prop-types';

const Project = ({_id, name, deadline, consultday, note}) => {
  return (
    <li className='project-container'>
      <div className='project-title-container'>
        <p className='project-title'><strong>{name}</strong> consult is <strong>{consultday}</strong> and the deadline is in <strong>{deadline}</strong></p>
        <Link to={`/edit/${_id}`} className='link'>
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
  _id: string.isRequired
};

export default Project;
