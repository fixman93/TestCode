// https://redux.js.org/recipes/computingderiveddata
const { Status } = require('../constant/status');
const { createSelector } = require('reselect');

const getActionTypes = state => state.actionTypes;
const getAddressBook = state => state.addressBook;

function weaveClient(state) {
  const w = state.weave;
  if (!w) {
    return null;
  }
  const c = w.client;
  if (!c) {
    return null;
  }
  return c;
}

function isRequestLoadingSelector(state) {
  return Object.values(state).indexOf(Status.PENDING) !== -1;
}

const resultByActionType = createSelector(
  [getActionTypes], (actionTypes) => actionTypes
);

const keysByName = createSelector(
  [getAddressBook], (addressBook) => addressBook
);

module.exports = {
  isRequestLoadingSelector,
  resultByActionType,
  keysByName,
  weaveClient
};

