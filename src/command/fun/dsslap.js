const {
    Command
} = require('discord.js-commando');

var dsslap = "The absolute madman Deus ESC-A Zephyros started hitting <@326073902830845963>\nhttp://gph.is/2gGiapC";

module.exports = class DeusSlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dsslap',
            group: 'fun',
            memberName: 'dsslap',
            description: 'SLAP!'
        });
    }

    run(msg) {
        msg.delete().catch(console.error);
        msg.channel.send(dsslap).catch(console.error);
    }
}