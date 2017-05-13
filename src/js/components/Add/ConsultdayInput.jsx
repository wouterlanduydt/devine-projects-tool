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

ConsultdayInput.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(ConsultdayInput)
);
