const {
    Command
} = require('discord.js-commando');
const config = require('../../config.json');
const db = require('../../database/dbhelper.js');

var commandSample = `\`\`\`/symbol<number between 1 to ${config.max_symbol}>\`\`\``;
var aliasesArray = [];
for (var i = 1; i <= config.max_symbol; i++) {
    aliasesArray.push(`symbol${i}`);
}

module.exports = class SymbolCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'symbol',
            aliases: aliasesArray,
            group: 'symbolart',
            memberName: 'symbol',
            description: 'Display stored symbol arts.',
            examples: [commandSample]
        });
    }

    run(msg) {
        let position = msg.content.match(/\d+/g || []);
        if (position === null) {
            msg.delete();
            let param = msg.content.replace(config.prefix + "symbol", "").trim();
            var paramMessage;
            if (param.length > 0) {
                paramMessage = `Invalid number \'${param}\'!`;
            } else {
                paramMessage = 'No number specified.';
            }
            const errorMessage = {
                "embed": {
                    "title": `${paramMessage} You must use the following format:`,
                    "description": commandSample
                }
            };
            msg.channel.send(errorMessage).catch(console.error);
        } else {
            let symbolPos = position[0];
            let authorName = msg.author.username;
            let authorAvatar = msg.author.avatarURL;
            db.find({
                id: `${msg.author.id + symbolPos}`
            }, (result, image) => {
                if (result) {
                    msg.delete();
                    const data = {
                        "embed": {
                            "author": {
                                "name": `${authorName}`,
                                "icon_url": `${authorAvatar}`
                            },
                            "image": {
                                "url": `${image}`
                            }
                        }
                    };
                    msg.channel.send(data).catch(console.error);
                } else {
                    msg.reply(`Nothing saved at slot ${symbolPos}. Use \`setsyb\` command to save a new symbol arts.`).catch(console.error);
                }
            });
        }
    }
};
