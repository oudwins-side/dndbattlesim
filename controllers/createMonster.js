const CreateCharacter = require('../models/CreateCharacter');
module.exports = (userArgs) => {
  const monster = {
    name: 'monster',
  };
  userArgs.forEach((arg) => {
    const argSplit = arg.split('=');
    monster[argSplit[0]] = argSplit[1];
  });
  return CreateCharacter(monster);
};
