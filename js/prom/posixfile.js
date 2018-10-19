const { promExecWithArguments } = require('./posixprocess');

// rm -rf a directory
async function promRmRF(dirname) {
  await promExecWithArguments('rm', ['-rf', dirname]);
}

// mkdir -p a directory
async function promMkdirP(dirname) {
  await promExecWithArguments('mkdir', ['-p', dirname]);
}

// rm -rf dirname && mkdir dirname
async function promRmRFAndMkdir(dirname) {
  await promRmRF(dirname);
  await promMkdirP(dirname);
}

module.exports = { promRmRF, promMkdirP, promRmRFAndMkdir };
