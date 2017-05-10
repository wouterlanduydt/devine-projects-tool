import React from 'react';

const DeadlineInput = () => {
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

export default DeadlineInput;
