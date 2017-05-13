import React from 'react';

const EditConsultday = () => {
  return (
    <div className='input-container'>

      <label htmlFor='consultday'>Consult Day</label>

      <select id='consultday'>
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

export default EditConsultday;
