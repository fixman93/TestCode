const { promGetKeyBase } = require('./downdb');

async function promGetKey(name) {
  const keybase = await promGetKeyBase();
  const userKey = keybase.get(name);
  return { name: name, keypair: userKey };
}

async function promMakeKey(name) {
  const result = await promGetKey(name);
  if (result.keypair) { return result; }

  const keybase = await promGetKeyBase();
  keybase.add(name);
  await keybase.save();
  return promGetKey(name);
}

// async interface insulation layer to ensure easy migration
// from weave to web4

module.exports = {
  promGetKey,
  promMakeKey,
};
