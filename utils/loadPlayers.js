const fs = require('fs');
const path = require('path');

module.exports = (curPath) => {
  const regex = /(\w+)\.json/;
  const players = [];

  fs.readdirSync(curPath).forEach((file) => {
    const match = regex.exec(file);
    if (match) {
      const player = fs.readFileSync(path.join(curPath, file), 'utf-8');
      players.push(JSON.parse(player));
    }
  });
  return players;
};
