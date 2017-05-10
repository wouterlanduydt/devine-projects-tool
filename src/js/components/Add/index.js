/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import NameInput from './NameInput';
import DeadlineInput from './DeadlineInput';
import ConsultdayInput from './ConsultdayInput';
import NotesInput from './NotesInput';

const Add = () => {
  return (
    <section className='add-container'>

      <p className='show-hide'>show</p>

      <form className='add-form'>
        <NameInput />
        <DeadlineInput />
        <ConsultdayInput />
        <NotesInput />

        <input
          type='submit'
          value='add'
          className='add-submit'
          disabled=''
        />

      </form>

    </section>
  );
};

export default Add;
