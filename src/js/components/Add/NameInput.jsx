import React from 'react';

const NameInput = () => {
  return (
    <div className='input-container'>

      <label htmlFor='name'>Projectnaam</label>

      <input
        type='text'
        id='name'
      />

    </div>
  );
};

export default NameInput;
