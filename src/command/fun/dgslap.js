const {
    Command
} = require('discord.js-commando');

var dgslap = "The absolute madman Erythron Dragon has started hitting <@326073902830845963>\nhttp://gph.is/2zh1eMQ";

module.exports = class DragonSlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dgslap',
            group: 'fun',
            memberName: 'dgslap',
            description: 'SLAP!'
        });
    }

    run(msg) {
        msg.delete().catch(console.error);
        msg.channel.send(dgslap).catch(console.error);
    }
}