/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import NameInput from './NameInput';
import DeadlineInput from './DeadlineInput';
import ConsultdayInput from './ConsultdayInput';
import NotesInput from './NotesInput';

const Add = ({store}) => {

  const {add, name} = store;

  const handleSubmit = e => {

    e.preventDefault();

    add(name);

  };

  return (
    <section className='add-container'>

      <p className='show-hide'>+ Add a new project</p>

      <form className='add-form hide' onSubmit={handleSubmit}>
        <NameInput />
        <DeadlineInput />
        <ConsultdayInput />
        <NotesInput />

        <div className='button-container'>
          <input
            type='submit'
            value='Add Project'
            className='add-submit'
            disabled=''
          />

          <p className='cancel-button'>Cancel</p>
        </div>

      </form>

    </section>
  );

};

Add.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Add)
);
