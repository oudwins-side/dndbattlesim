#!/usr/bin/env node
// imports
const endBattleEmitter = require('./models/endBattleEmitter');
const endBattle = require('./utils/endBattle');
const createMonster = require('./controllers/createMonster');
const createPlayers = require('./controllers/createPlayers');
const checkBattleEnded = require('./utils/checkEndBattle');
const combatRound = require('./utils/combatRound');
const combatTests = require('./battle_tests');

// !Create Monster
const userArgs = process.argv.slice(2);
const monster = createMonster(userArgs);
// ! Create PCs
const players = createPlayers(`${__dirname}/PCs`);
//! Combat Tests
const tests = combatTests(players.pcs, monster);
// ! BATTLE
// Listen for end of combat
endBattleEmitter.on('end', endBattle);
let round = 0;
while (!checkBattleEnded(players, monster, tests, round)) {
  round++;
  combatRound(players, monster);
}
