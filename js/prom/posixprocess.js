const { execFile } = require('child_process');
const util = require('util');

const promExecFile = util.promisify(execFile);

// returns Object with stdout, stderr, error properties TODO typescript
async function promExecWithArguments(cmd, args) {
  //console.log(cmd + ' ' + args.join(' '));
  return promExecFile(cmd, args);
}

module.exports = { promExecWithArguments };
