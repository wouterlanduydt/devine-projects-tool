/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';

import store from './store/';
import {Provider} from 'mobx-react';

const init = () => {

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`.react-mount`)
  );

};

init();

const $showHideToggle = document.querySelector(`.show-hide`);
const $addForm = document.querySelector(`.add-form`);
const $cancelButton = document.querySelector(`.cancel-button`);

const onToggleClick = () => {
  if ($addForm.classList.contains(`hide`)) {
    $addForm.classList.remove(`hide`);
    $showHideToggle.classList.add(`hide`);
  }
};

const onCancelClick = () => {
  $addForm.classList.add(`hide`);
  $showHideToggle.classList.remove(`hide`);
};

if ($showHideToggle) {
  $showHideToggle.addEventListener(`click`, onToggleClick);
  $cancelButton.addEventListener(`click`, onCancelClick);
}
