let dbBinding;

function normalizedMemdown() {
  const encode = require('encoding-down');
  const memdown = require('memdown');
  return encode(memdown());
}


if (typeof process === 'object' && process.title !== 'browser') {
  dbBinding = normalizedMemdown;
} else {
  const { browsedown } = require('browsedown');
  dbBinding = browsedown;
}

module.exports = { dbBinding };
