import React from 'react';
import {Link} from 'react-router-dom';

import {string, number} from 'prop-types';

const Project = ({id, name, deadline, consultday, note}) => {
  return (
    <li>
      <p className='project-title'><strong>{name} consult is {consultday}, and there are THREE DAYS left until the {deadline}.</strong></p>
      <p className='project-notes'>{note}</p>
      <Link to={`/edit/${id}`}>
        <p>Edit</p>
      </Link>
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
