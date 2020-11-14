module.exports = (players, monster) => {
  const tests = ['----START OF LOGS-----'];
  // 1) test if monster kills PC on one hit (or deals 90%+ hp)
  const avgPercentDamageOnPlayers =
    players.reduce((acc, player) => {
      const percetageOfHealth = Math.round(
        (monster.dealDmg() / player.getHp()) * 100
      );
      if (percetageOfHealth >= 90)
        tests.push(
          `${monster.name} deals ${percetageOfHealth}% of ${player.name}'s health in a single attack`
        );
      return (acc += percetageOfHealth);
    }, 0) / players.length;
  tests.push(
    `${monster.name} deals an average of ${avgPercentDamageOnPlayers}% of player's health on each attack`
  );
  // 1B) TEST IF MONSTER KILLS PC ON DOING FULL ATTACK.
  // 2) test if PCs hit monster less than 50% or more than 60% - make average
  let avgMonsterToHitPercentage = players.reduce((acc, player, idx) => {
    return (acc += monster.calcToHit(player.getAc()));
  }, 0);
  avgMonsterToHitPercentage /= players.length;
  tests.push(
    `${monster.name} hits players an average of ${avgMonsterToHitPercentage}% of the time`
  );
  // 3) Test Monster to hit
  const avgPlayerToHitPercentage =
    players.reduce((acc, player, idx) => {
      return (acc += player.calcToHit(monster.getAc()));
    }, 0) / players.length;
  tests.push(
    `Players hit ${monster.name} an average of ${avgPlayerToHitPercentage}% of the time`
  );
  tests.push('----END OF LOGS----');
  return tests;
};
