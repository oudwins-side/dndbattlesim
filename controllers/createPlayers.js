const loadPlayers = require('../utils/loadPlayers');
const CreateCharacter = require('../models/CreateCharacter');

module.exports = (dir) => {
  const players = {};
  players.pcs = loadPlayers(dir).map((el) => {
    return CreateCharacter({
      name: el.name,
      hp: el.defense.hp,
      ac: el.defense.ac,
      dmg: el.attack.avgDamage,
      toHit: el.attack.bonusToHit,
    });
  });
  players.alive = [];
  players.pcs.forEach((el, idx) => {
    players.alive.push(idx);
  });
  return players;
};
