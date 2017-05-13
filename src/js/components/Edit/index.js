/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';
import EditName from './EditName';
import EditDeadline from './EditDeadline';
import EditConsultday from './EditConsultday';
import EditNotes from './EditNotes';

import getIdFromUrl from '../../lib/getIdFromUrl';

const Edit = ({store}) => {

  const {getProjectById} = store;

  const project = getProjectById(getIdFromUrl(window.location.href));

  return (
    <section>

      <form className='edit-container'>
        <header>
          <h2>Edit {project.name}</h2>
        </header>
        <EditName {...project} />
        <EditDeadline {...project} />
        <EditConsultday {...project} />
        <EditNotes {...project} />

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
          />
        </div>

      </form>

      <Link to={`/`} className='link'>
        <p className='back-button'>Back to Overview</p>
      </Link>
    </section>
  );
};

Edit.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Edit)
);
