const {
  promConnectWeaveClient,
} = require('../prom/weave');

const {
  CONNECT_WEAVE_CLIENT,
} = require('../constant/netbridge');

function performConnectWeaveClient(uri) {
  return (dispatch) => dispatch({
    type: CONNECT_WEAVE_CLIENT,
    payload: promConnectWeaveClient(uri)
  });
}

module.exports = {
  performConnectWeaveClient,
};
