import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const DeadlineInput = ({store}) => {

  let $deadlineInput;

  const {deadline, setDeadline} = store;

  const onChangeHandler = () => {
    setDeadline($deadlineInput.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='deadline'>Deadline</label>

      <input
        ref={$el => $deadlineInput = $el}
        type='date'
        id='deadline'
        value={deadline}
        onChange={onChangeHandler}
      />

    </div>
  );
};

DeadlineInput.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(DeadlineInput)
);
