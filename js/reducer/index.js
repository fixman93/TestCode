const { combineReducers } = require('redux');
const { appReducer } = require('./appReducer');
const { keysReducer } = require('./keysReducer');
const { weaveReducer } = require('./weaveReducer');

const rootReducer = combineReducers({
  actionTypes: appReducer,
  addressBook: keysReducer,
  weave: weaveReducer,
});

module.exports = {
  rootReducer
};
