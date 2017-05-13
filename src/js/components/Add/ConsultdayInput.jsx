import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const ConsultdayInput = ({store}) => {

  let $consultdayInput;

  const {consultday, setConsultday} = store;

  const onChangeHandler = () => {
    setConsultday($consultdayInput.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='consultday'>Consult Day</label>

      <select
        ref={$el => $consultdayInput = $el}
        id='consultday'
        value={consultday}
        onChange={onChangeHandler}
        >
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

ConsultdayInput.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(ConsultdayInput)
);
