const {
    Command
} = require('discord.js-commando');

var dgslap = "The absolute madman Omega Loser has started hitting <@326073902830845963>\nhttps://gph.is/2Lfl1DJ";

module.exports = class DragonSlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lsslap',
            group: 'fun',
            memberName: 'lsslap',
            description: 'SLAP!'
        });
    }

    run(msg) {
        msg.delete().catch(console.error);
        msg.channel.send(dgslap).catch(console.error);
    }
}