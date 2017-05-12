import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const NotesInput = ({store}) => {

  const {note} = store;
  console.log(note);

  // const handleChange = () => {
  //   console.log(`hoi`);
  // };

  return (
    <div className='input-container'>

      <label htmlFor='note'>Notes</label>

      <textarea
        cols='60' rows='4'
        id='note'
        // value={note}
      />

    </div>
  );
};

NotesInput.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(NotesInput)
);
