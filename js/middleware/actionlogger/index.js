/**
 *  * Logs all actions and states after they are dispatched.
 *   */
const actionLogger = store => next => action => {
      console.group(action.type);
      let clname = '';
      if (action.payload) {
        clname = action.payload.constructor.name;
      }
      console.info('dispatching', clname, JSON.stringify(action.payload, 2));
      const result = next(action);
      console.log('next state', store.getState());
      console.groupEnd(action.type);
      return result;
};

module.exports = { actionLogger };
