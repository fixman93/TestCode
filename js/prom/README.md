Everything in this directory returns a promise.

All exported functions in this directory are async.

Every function can and should usually be prefixed with "prom."

We do not use `dispatch` anywhere in this area.

We do not use `redux thunks` like `.catch` in this area. We are not
aware of redux actions here.

We put as much code as possible in this area because it has the highest
composability.

