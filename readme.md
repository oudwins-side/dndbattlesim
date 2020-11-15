# What is this?

Welcome, this is a cli (command line interface) tool to simulate DnD combat vs a single monster.

It will assume that everyone does average damage and hits every turn.

It currently only works for simulating combat versus one monster because I find im too lazy to type all monster stats into the commandline.

Arguments currently are (\* denotes requiered):

- \*hp=[val] - monster HP
- \*toHit=[val] - Monster to hit bonus
- \*dmg=[val] - monster damage in dice without space, will be parsed to average damage (2d6+10 = 17)
- \*ac=[val] - monster AC
- atks=[val] - number of monster attacks

### How can I customize this for my players?

simple just edit the json files inside the PCs folder or add new ones. New files must follow the same format. All JSON files inside that folder will be loaded automatically, if you are missing a player for a session just move his pc into the "not playing" folder, json files in that folder will not be picked up.

# How to install as cli tool?

Remeber to edit the JSON files for the PCs before doing this and after each level up just update them and run the command again. (now that I think about it, you might not have to do this).

In linux clone the repo and type:

- npm i -g --only=prod

# Folders - this is not done..

## PCs

Json files for each PC with their most important stats.

## utils

Some utilities and other fns

## testing

testing files.
