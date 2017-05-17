/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import classNames from 'classnames';

import NameInput from './NameInput';
import DeadlineInput from './DeadlineInput';
import ConsultdayInput from './ConsultdayInput';
import NotesInput from './NotesInput';

const Add = ({store}) => {

  const {add, name, deadline, consultday, note, toggleForm} = store;

  const {formShown} = store;

  const handleSubmit = e => {

    e.preventDefault();
    add(name, deadline, consultday, note);

  };

  const handleClick = () => toggleForm();

  return (
    <section className='add-container'>

      <p className={classNames(`show-hide`, {hide: !formShown})} onClick={handleClick}>+ Add a new project</p>

      <form className={classNames(`add-form`, {hide: formShown})} onSubmit={handleSubmit}>
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
            onClick={handleClick}
          />

          <p className='cancel-button' onClick={handleClick}>Cancel</p>
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
