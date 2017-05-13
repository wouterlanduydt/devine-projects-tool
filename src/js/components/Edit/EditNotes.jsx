import React from 'react';

import PropTypes from 'prop-types';

const EditNotes = ({note}) => {
  return (
    <div className='input-container'>

      <label htmlFor='note'>Notes</label>

      <textarea
        cols='60' rows='4'
        id='note'
        defaultValue={note}
      />

    </div>
  );
};

EditNotes.propTypes = {
  note: PropTypes.string.isRequired
};

export default EditNotes;
