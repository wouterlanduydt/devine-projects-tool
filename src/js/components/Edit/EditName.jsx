import React from 'react';

import PropTypes from 'prop-types';

const EditName = ({name, onChange}) => {

  const handleChange = e => {
    onChange(`name`, e.currentTarget.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='name'>Projectnaam</label>

      <input
        type='text'
        id='name'
        onChange={handleChange}
        defaultValue={name}
      />

    </div>
  );
};

EditName.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditName;
