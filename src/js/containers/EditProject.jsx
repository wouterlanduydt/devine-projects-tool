import React from 'react';

import Edit from '../components/Edit/';

import PropTypes from 'prop-types';

import {observer} from 'mobx-react';

const EditProject = ({id}) => (
  <Edit id={id} />
);

EditProject.propTypes = {
  id: PropTypes.string.isRequired
};

export default observer(EditProject);
