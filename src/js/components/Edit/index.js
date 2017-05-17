/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string} from 'prop-types';

import {Link} from 'react-router-dom';
import EditName from './EditName';
import EditDeadline from './EditDeadline';
import EditConsultday from './EditConsultday';
import EditNote from './EditNote';

const Edit = ({store, id}) => {
  const {remove, updateProject, project} = store;
  const updatedProject = {};

  const handleDelete = () => remove(id);

  const handleSubmit = e => {

    e.preventDefault();
    updateProject(updatedProject);

  };

  const {name, deadline, consultday, note} = project;

  const handleChange = (key, value) => {
    updatedProject[key] = value;
    updatedProject[`_id`] = id;
  };

  return (
    <section>

      <form className='edit-container' onSubmit={handleSubmit}>
        <header>
          <h2>Edit {name}</h2>
        </header>

        <EditName name={name} onChange={handleChange} />
        <EditDeadline deadline={deadline} onChange={handleChange} />
        <EditConsultday consultday={consultday} onChange={handleChange} />
        <EditNote note={note} onChange={handleChange} />

        <div className='botton-container'>
          <input
            type='submit'
            value='Save'
            className='save-button'
            disabled=''
          />

          <Link to={`/`} >
            <input
              type='button'
              value='Delete'
              className='delete-button'
              onClick={handleDelete}
            />
          </Link>
        </div>

      </form>

      <Link to={`/`} className='link'>
        <p className='back-button'>Back to Overview</p>
      </Link>
    </section>
  );
};

Edit.propTypes = {
  store: PropTypes.observableObject.isRequired,
  id: string.isRequired
};

export default inject(`store`)(
  observer(Edit)
);
