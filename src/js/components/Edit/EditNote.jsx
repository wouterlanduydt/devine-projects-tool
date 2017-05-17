import React from 'react';

import PropTypes from 'prop-types';

const EditNotes = ({note, onChange}) => {

  const handleChange = e => {
    onChange(`note`, e.currentTarget.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='note'>Notes</label>

      <textarea
        cols='60' rows='4'
        id='note'
        defaultValue={note}
        onChange={handleChange}
      />

    </div>
  );
};

EditNotes.propTypes = {
  note: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditNotes;
