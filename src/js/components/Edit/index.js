/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {Link} from 'react-router-dom';
import EditName from './EditName';
import EditDeadline from './EditDeadline';
import EditConsultday from './EditConsultday';
import EditNotes from './EditNotes';

const Edit = () => {
  return (
    <section>

      <header>
        <h2>Edit Projectname</h2>
      </header>

      <EditName />
      <EditDeadline />
      <EditConsultday />
      <EditNotes />
      <Link to={`/`}>
        <p>back to overview</p>
      </Link>
    </section>
  );
};

export default Edit;
