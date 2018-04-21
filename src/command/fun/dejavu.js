const {
    Command
} = require('discord.js-commando');

var dejavu = "......　     ∧∧                  Deja vu!!\n　　 (　･ω･)             I've just been in this place before!\n　 ＿|　⊃／(＿＿     Higher on the street, And I know it's my time to go~!\n／　└-(＿＿＿_／    Calling you, and the search is a mystery \n￣O￣￣￣O￣           Standing on my feet It's so hard when I try to be me, Uuwoah~";

module.exports = class DejavuCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dejavu',
            group: 'fun',
            memberName: 'dejavu',
            description: 'DEJA VU!'
        });
    }

    run(msg) {
        let authorName = msg.author.username;
        let authorAvatar = msg.author.avatarURL;
        const data = {
            "embed": {
                "author": {
                    "name": `${authorName}`,
                    "icon_url": `${authorAvatar}`
                },
                "description": dejavu
            }
        };
        msg.delete().catch(console.error);
        msg.channel.send(data).catch(console.error);
    }
}