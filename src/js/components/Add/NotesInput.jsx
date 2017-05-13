import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const NotesInput = ({store}) => {

  let $textarea;

  const {note, setNote} = store;

  const onChangeHandler = () => {
    setNote($textarea.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='note'>Notes</label>

      <textarea
        ref={$el => $textarea = $el}
        cols='60' rows='4'
        id='note'
        value={note}
        onChange={onChangeHandler}
      />

    </div>
  );
};

NotesInput.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(NotesInput)
);
