import React from 'react';

import PropTypes from 'prop-types';

const EditDeadline = ({onChange}) => {

  const handleChange = e => {
    onChange(`deadline`, e.currentTarget.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='deadline'>Deadline</label>

      <input
        type='date'
        id='deadline'
        onChange={handleChange}
      />

    </div>
  );
};

EditDeadline.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default EditDeadline;
