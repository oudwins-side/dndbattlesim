const endBattleEmitter = require('../models/endBattleEmitter');

module.exports = (players, monster, tests, round) => {
  if (monster.getHp() <= 0) {
    const unconsciousPlayers = players.pcs.length - players.alive.length;
    tests.push(
      `Battle has ended with ${unconsciousPlayers} players unconscious`
    );
    endBattleEmitter.emit('end', tests, round, players.pcs);
    return true;
  }
  if (players.alive.length === 0) {
    tests.push(
      `Battle has ended, all players are DEAD, ${
        monster.name
      } is at ${Math.round((monster.getHp() / monster.getMaxHp()) * 100)}% HP`
    );
    endBattleEmitter.emit('end', tests, round, players.pcs);
    return true;
  }
  return false;
};
