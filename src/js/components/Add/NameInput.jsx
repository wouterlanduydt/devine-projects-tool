import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const NameInput = ({store}) => {

  let $nameInput;

  const {name, setName} = store;

  const onChangeHandler = () => {
    setName($nameInput.value);
  };

  return (
    <div className='input-container'>

      <label htmlFor='name'>Projectnaam</label>

      <input
        ref={$el => $nameInput = $el}
        type='text'
        id='name'
        value={name}
        onChange={onChangeHandler}
      />

    </div>
  );
};

NameInput.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(NameInput)
);
