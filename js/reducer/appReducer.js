const {
  CONNECT_WEAVE_CLIENT,
  CONNECT_WEB4_CLIENT,
  GET_ACCOUNT_DETAIL,
  GET_SENT_SWAP_OFFERS,
  GET_SWAP_OFFERS,
  GET_TOKENS,
  GET_TRANSACTIONS,
  SEND_SWAP_OFFER,
  SEND_SWAP_COUNTER,
  SEND_SWAP_RELEASE,
  SEND_TRANSACTION,
  GET_KEY,
  GET_PUBKEY,
  MAKE_KEY,
} = require('../constant/netbridge');

const { splitActionNameInTwo } = require('../helper');
const { Status } = require('../constant/status');

const appReducerPrefixes = [
  CONNECT_WEAVE_CLIENT,
  CONNECT_WEB4_CLIENT,
  GET_ACCOUNT_DETAIL,
  GET_SENT_SWAP_OFFERS,
  GET_SWAP_OFFERS,
  GET_TOKENS,
  GET_TRANSACTIONS,
  SEND_SWAP_OFFER,
  SEND_SWAP_COUNTER,
  SEND_SWAP_RELEASE,
  SEND_TRANSACTION,
  GET_KEY,
  GET_PUBKEY,
  MAKE_KEY,
];

const initialState = {
  [CONNECT_WEAVE_CLIENT]: { status: Status.INIT },
  [CONNECT_WEB4_CLIENT]: { status: Status.INIT },
  [GET_ACCOUNT_DETAIL]: { status: Status.INIT },
  [GET_SENT_SWAP_OFFERS]: { status: Status.INIT },
  [GET_SWAP_OFFERS]: { status: Status.INIT },
  [GET_TOKENS]: { status: Status.INIT },
  [GET_TRANSACTIONS]: { status: Status.INIT },
  [SEND_SWAP_OFFER]: { status: Status.INIT },
  [SEND_SWAP_COUNTER]: { status: Status.INIT },
  [SEND_SWAP_RELEASE]: { status: Status.INIT },
  [SEND_TRANSACTION]: { status: Status.INIT },
  [GET_KEY]: { status: Status.INIT },
  [GET_PUBKEY]: { status: Status.INIT },
  [MAKE_KEY]: { status: Status.INIT },
};

// create easy lookup table to check if this reducer should handle event based
// on prefix
const prefixesTable = {};
appReducerPrefixes.forEach(x => { prefixesTable[x] = true; });

function appReducer(state = initialState, action) {
  const [prefix, suffix] = splitActionNameInTwo(action.type);

  if (!prefixesTable[prefix]) { return state; }

  switch (suffix) {
    case 'PENDING':
      return { ...state, [prefix]: { status: Status.PENDING } };
    case 'FULFILLED':
      return { ...state, [prefix]: { status: Status.FULFILLED, data: action.payload } };
    case 'REJECTED':
      return { ...state, [prefix]: { status: Status.REJECTED, error: action.payload } };
    default:
      return state;
  }
}

module.exports = {
  appReducer,
};
/*
    case IS_USERNAME_EXIST:
      return {
        ...state,
        message: action.result.data[0]
      };
    case UNAUTHORIZED:
      return {
        ...state,
        message: action.result.data[0]
      };
    case SET_USERNAME:
      return {
        ...state,
        currentUser: action.result
      };
*/
