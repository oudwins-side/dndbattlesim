const parseDamage = require('../utils/parser');
const avgDiceDamage = require('../utils/parser_utils/diceToAvgDamage');
const d20_percentage = require('../utils/d20_percentage');

module.exports = ({ hp, ac, dmg, toHit, atks = 1, name }) => {
  // simple validation
  if (!hp || !ac || !dmg || !toHit || !atks) {
    console.log(
      'Usage: node app.js hp=[value] toHit=[value] dmg=[value] ac=[value] atks=[number of attacks/round]?'
    );
    process.exit(9);
  }
  // start class
  const characterMaxHp = hp;
  let characterHp = hp;
  const characterAc = ac;
  const characterToHit = parseInt(toHit);
  const characterDmg = parseDamage(dmg, avgDiceDamage);
  const characterAtks = atks;
  return {
    name,
    getHp() {
      return characterHp;
    },
    getMaxHp() {
      return characterMaxHp;
    },
    getAttacks() {
      return characterAtks;
    },
    getAc() {
      return characterAc;
    },
    takeDmg(dmg) {
      characterHp -= dmg;
      return this;
    },
    dealDmg() {
      return characterHp <= 0 ? 0 : characterDmg;
    },
    calcToHit(enemyAc) {
      return d20_percentage(characterToHit, enemyAc);
    },
  };
};
