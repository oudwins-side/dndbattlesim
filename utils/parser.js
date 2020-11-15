module.exports = (string, diceDmgParser) => {
  const damageString = string.replace(/\s/g, '');
  // checking case just input damage number
  if (damageString.match(/^[0-9]+$/)) return parseInt(damageString);
  // Finding the die damage
  const regexSelectDice = /[0-9]+?d[0-9]+/g;
  const match = damageString.match(regexSelectDice);
  if (match) {
    const avgDice = match.map((el) => {
      return diceDmgParser(el);
    });
    const damageEquationString = avgDice.reduce((acc, el, idx) => {
      return acc.replace(match[idx], el);
    }, damageString);
    return eval(damageEquationString);
  } else {
    console.log('---ERROR: parsing damageFailed failed----');
    return -1;
  }
};
