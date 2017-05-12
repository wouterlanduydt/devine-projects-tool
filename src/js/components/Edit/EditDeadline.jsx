import React from 'react';

const EditDeadline = () => {
  return (
    <div className='input-container'>

      <label htmlFor='deadline'>Deadline</label>

      <input
        type='date'
        id='deadline'
      />

    </div>
  );
};

export default EditDeadline;
