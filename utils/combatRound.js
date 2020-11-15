module.exports = (players, monster) => {
  // 1) Players deal damage to monster
  for (let i = 0; i < players.pcs.length; i++) {
    monster.takeDmg(players.pcs[i].dealDmg());
  }
  // 2) Monster deals damage to player (random) * number of attacks
  for (let i = 0; i < monster.getAttacks(); i++) {
    // if all players dead stop attacking
    if (players.alive.length <= 0) break;
    // Monster Decides who to attack
    const attackedPlayer =
      players.alive[Math.floor(Math.random() * players.alive.length)];
    // Monster attacks
    players.pcs[attackedPlayer].takeDmg(monster.dealDmg());
    // If player died from monster attack remove that player from possible targets.
    if (players.pcs[attackedPlayer].getHp() <= 0)
      players.alive = players.alive.filter((el) => el !== attackedPlayer);
  }
};
