const {
  CONNECT_WEAVE_CLIENT
} = require('../constant/netbridge');

const { splitActionNameInTwo } = require('../helper');
const { Status } = require('../constant/status');

const weaveReducerPrefixes = [
  CONNECT_WEAVE_CLIENT,
];

const initialState = {};

const prefixesTable = {};
weaveReducerPrefixes.forEach(x => { prefixesTable[x] = true; });

function weaveReducer(state = initialState, action) {
  const [prefix, suffix] = splitActionNameInTwo(action.type);

  if (!prefixesTable[prefix]) { return state; }
  if (!action.payload) { return state; }
  if (suffix !== 'FULFILLED') { return state; }
  return { ...state, client: action.payload };
}

module.exports = {
  weaveReducer,
};
