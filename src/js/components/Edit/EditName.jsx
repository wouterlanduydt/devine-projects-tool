import React from 'react';

import PropTypes from 'prop-types';

const EditName = ({name}) => {
  return (
    <div className='input-container'>

      <label htmlFor='name'>Projectnaam</label>

      <input
        type='text'
        id='name'
        defaultValue={name}
      />

    </div>
  );
};

EditName.propTypes = {
  name: PropTypes.string.isRequired
};

export default EditName;
