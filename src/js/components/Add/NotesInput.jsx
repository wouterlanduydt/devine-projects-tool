import React from 'react';

const NotesInput = () => {
  return (
    <div className='input-container'>

      <label htmlFor='note'>Notes</label>

      <textarea
        cols='60' rows='4'
        id='note'
      />

    </div>
  );
};

export default NotesInput;
