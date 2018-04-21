const {
    CommandoClient
} = require('discord.js-commando');
const path = require('path');
const config = require("./src/config.json");

const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: config.owner_id,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['symbolart', 'Symbol Arts related'],
        ['fun', 'Funny commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'src/command'));

client.on('ready', () => {
    console.log('Logged in!');
});

client.login(config.token);
