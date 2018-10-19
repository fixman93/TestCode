const {
  promGetKey,
  promGetPubkey,
  promMakeKey,
} = require('../prom/keys');

const {
  GET_KEY,
  MAKE_KEY,
} = require('../constant/netbridge');

function performGetKey(username) {
  return (dispatch) => dispatch({
    type: GET_KEY,
    payload: promGetKey(username)
  });
}

function performMakeKey(username) {
  return (dispatch) => dispatch({
    type: MAKE_KEY,
    payload: promMakeKey(username)
  });
}

module.exports = {
  performGetKey,
  performMakeKey,
};
