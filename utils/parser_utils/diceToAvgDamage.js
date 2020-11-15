module.exports = (dice) => {
  const diceSplit = dice.split('d');
  const numDice = parseInt(diceSplit[0]);
  const avgDamageOfDieCategory = (parseInt(diceSplit[1]) + 1) / 2;
  return avgDamageOfDieCategory * numDice;
};
