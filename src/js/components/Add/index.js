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

      <p className='show-hide'>show</p>

      <form className='add-form' onSubmit={handleSubmit}>
        <NameInput />
        <DeadlineInput />
        <ConsultdayInput />
        <NotesInput />

        <input
          type='submit'
          value='Add Project'
          className='add-submit'
          disabled=''
        />

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
