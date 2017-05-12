import React from 'react';

const EditNotes = () => {
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

export default EditNotes;
