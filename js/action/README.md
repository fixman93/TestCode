Every exported function in this area should be synchronous.

Every exported function in this area should be prefixed with "perform".

Every "perform" prefixed function should return a redux action.

Every redux action returned here should contain a promise payload for
processing with redux-promise-middleware.

Every redux action returned here should be a thin wrapper to call a
method prefixed with "prom".

Actions may use `.catch` redux thunks for error catching.
