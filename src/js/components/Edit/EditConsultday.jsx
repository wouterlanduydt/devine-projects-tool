import React from 'react';

const EditConsultday = () => {
  return (
    <div className='input-container'>

      <label htmlFor='consultday'>Consult Day</label>

      <select id='consultday'>
        <option value='mo'>Monday</option>
        <option value='tu'>Tuesday</option>
        <option value='we'>Wednesday</option>
        <option value='th'>Thursday</option>
        <option value='fr'>Friday</option>
        <option value='sa'>Saturday</option>
        <option value='su'>Sunday</option>
      </select>

    </div>
  );
};

export default EditConsultday;
