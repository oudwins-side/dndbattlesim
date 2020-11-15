module.exports = (logs, rounds, players) => {
  logs.forEach((log) => console.log(log));
  console.log(`---- START OF COMBAT ----`);
  console.log(`combat lasted ${rounds} rounds`);
  players.forEach((player) =>
    console.log(
      `${player.name} - HP: ${player.getHp()}| ${Math.round(
        (player.getHp() / player.getMaxHp()) * 100
      )}%`
    )
  );
};
