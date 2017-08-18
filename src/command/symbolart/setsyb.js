const {
    Command
} = require('discord.js-commando');
const config = require('../../config.json');
const validUrl = require('valid-url');
const db = require('../../database/dbhelper.js');

var commandSample = `\`\`\`/setsyb <number between 1 to ${config.max_symbol}> <image URL>\`\`\``;

module.exports = class SetSybCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setsyb',
            group: 'symbolart',
            memberName: 'setsyb',
            description: 'Set or update saved symbol arts.',
            examples: [commandSample],
            args: [{
                key: 'position',
                prompt: 'Enter the position to save or update.',
                type: 'string'
            }, {
                key: 'image',
                prompt: 'Enter the image\'s URL',
                type: 'string'
            }]
        });
    }

    run(msg, args) {
        const {
            position,
            image
        } = args;
        const errorMessage = {
            "embed": {
                "title": "",
                "description": commandSample
            }
        };
        if (isNaN(position)) {
            errorMessage.embed.title = `Invalid number \'${position}\'! You must use the following format:`;
            msg.channel.send(errorMessage).catch(console.error);
        } else {
            if (!validUrl.isUri(image)) {
                errorMessage.embed.title = `Invalid URL \'${image}\'! You must use the following format:`
                msg.channel.send(errorMessage).catch(console.error);
            } else {
                msg.delete();
                db.save({
                    _id: `${msg.author.id + position}`,
                    position: position,
                    image: image
                });
                msg.reply(`Saved at position ${position}!`);
            }
        }
    }
};
