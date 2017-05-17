import React from 'react';

import PropTypes from 'prop-types';

const EditConsultday = ({onChange}) => {

  const handleChange = e => {
    onChange(`consultday`, e.currentTarget.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='consultday'>Consult Day</label>

      <select id='consultday' onChange={handleChange}>
        <option value='💁'>Select day...</option>
        <option value='Monday'>Monday</option>
        <option value='Tuesday'>Tuesday</option>
        <option value='Wednesday'>Wednesday</option>
        <option value='Thursday'>Thursday</option>
        <option value='Friday'>Friday</option>
      </select>

    </div>
  );
};

EditConsultday.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default EditConsultday;
