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

      <form className='edit-container'>
        <header>
          <h2>Edit Projectname</h2>
        </header>
        <EditName />
        <EditDeadline />
        <EditConsultday />
        <EditNotes />

        <div className='botton-container'>
          <input
            type='submit'
            value='Save'
            className='save-button'
            disabled=''
          />

          <input
            type='submit'
            value='Delete'
            className='delete-button'
            disabled=''
          />
        </div>

      </form>

      <Link to={`/`} className='link'>
        <p className='back-button'>Back to Overview</p>
      </Link>
    </section>
  );
};

export default Edit;
