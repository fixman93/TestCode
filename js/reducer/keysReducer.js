const {
  GET_KEY,
  GET_PUBKEY,
  MAKE_KEY,
} = require('../constant/netbridge');

const { splitActionNameInTwo } = require('../helper');
const { Status } = require('../constant/status');

const keysReducerPrefixes = [
  GET_KEY,
  GET_PUBKEY,
  MAKE_KEY,
];

const initialState = {};

// create easy lookup table to check if this reducer should handle event based
// on prefix
const prefixesTable = {};
keysReducerPrefixes.forEach(x => { prefixesTable[x] = true; });

// result of reducer will take the following shape:
//   {
//     name1: { GET_KEY: { ... } },
//     name2: { GET_KEY: { ... }, MAKE_KEY: { ... } },
//   }
function keysReducer(state = initialState, action) {
  const [prefix, suffix] = splitActionNameInTwo(action.type);

  if (!prefixesTable[prefix]) { return state; }
  if (!action.payload) { return state; }
  const name = action.payload.name;
  if (!name) { return state; }
  const oldNameObj = state[name] || {};

  switch (suffix) {
    case 'FULFILLED':
      return { ...state, [name]: { ...oldNameObj, [prefix]: action.payload } };
    default:
      return state;
  }
}

module.exports = {
  keysReducer,
};
