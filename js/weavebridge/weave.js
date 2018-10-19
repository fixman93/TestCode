let weave;

if (typeof process === 'object' && process.title !== 'browser') {
  weave = require('../../../node_modules/weave/lib/weave.node.js');
} else {
  weave = require('weave');
}

module.exports = { weave };
