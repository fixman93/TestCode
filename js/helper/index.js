function splitActionNameInTwo(actionName) {
  if (actionName === undefined) { return [actionName, '']; }
  const li = actionName.lastIndexOf('_');
  if (li === -1) { return [actionName, '']; }
  const p1 = actionName.substring(0, li);
  const p2 = actionName.substring(li + 1);
  return [p1, p2];
}

module.exports = {
  splitActionNameInTwo,
};
