# Folders

## PCs

Json files for each PC with their most important stats

## utils

Some utilities and other fns

## testing

testing files.

# Implemented

## Parser

- /utils/parser.js will parse any damage string and turn it into the average damage. It accepts any math operation using d to simbolize dice. For example, 1d6+1 will return 4.5
- /utils/parser_utils/diceToAvgDamage.js will parse [0-9]+?d[0-9]+ into average damage from dice.

# TODO

- MONSTER SHOULD NOT ATTACK A PERSON THAT IS OUT OF THE COMBAT AND A PERSON THAT IS OUT OF THE COMBAT SHOULD NOT ATTACK. THIS IS ALL UNDER COMBATROUND.JS and CREATECHARACTER.JS
- 1B) TEST IF MONSTER KILLS PC ON DOING FULL ATTACK.
