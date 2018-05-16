const {
    Command
} = require('discord.js-commando');


var rpslap = "The absolute madman Emperappy has started hitting <@326073902830845963>\nhttps://gph.is/2L5B6LY";

module.exports = class RappySlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rpslap',
            group: 'fun',
            memberName: 'rpslap',
            description: 'SLAP!'
        });
    }

    run(msg) {
        msg.delete().catch(console.error);
        msg.channel.send(rpslap).catch(console.error);
    }
}