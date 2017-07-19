/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const sampleCommand = require("./src/command/command_sample.js");
const Discord = require("discord.js");
const validUrl = require('valid-url');
const config = require("./src/config.json");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) {
        return;
    }
    if (message.content.startsWith(config.prefix + "symbol")) {
        message.delete();
        let position = message.content.match(/\d+/g || []);
        if (position === null) {
            let param = message.content.replace(config.prefix + "symbol", "");
            const errorMessage = {
                "embed": {
                    "title": `Invalid number \'${param}\'! You must use the following format:`,
                    "description": sampleCommand.SYMBOL
                }
            };
            message.channel.send(errorMessage).catch(console.error);
        } else {
            let symbolPos = position[0];
            let authorName = message.author.username;
            let authorAvatar = message.author.avatarURL;
            console.log(`${authorName}\n${authorAvatar}`);
            const data = {
                "embed": {
                    "author": {
                        "name": `${authorName}`,
                        "icon_url": `${authorAvatar}`
                    },
                    "image": {
                        "url": "http://i.imgur.com/axRBLCL.png"
                    }
                }
            };
            message.channel.send(data).catch(console.error);
        }
    } else if (message.content.startsWith(config.prefix + "setsyb")) {
        const errorMessage = {
            "embed": {
                "title": "",
                "description": sampleCommand.SETSYB
            }
        };
        const args = message.content.split(/\s+/g).slice(1);
        let position = args[0];
        let imageLink = args[1];
        if (isNaN(position)) {
            errorMessage.embed.title = `Invalid number \'${position}\'! You must use the following format:`;
            message.channel.send(errorMessage).catch(console.error);
        } else {
            if (!validUrl.isUri(imageLink)) {
                errorMessage.embed.title = `Invalid URL \'${imageLink}\'! You must use the following format:`
                message.channel.send(errorMessage).catch(console.error);
            } else {
                message.delete();
                // TODO: Add in actual implementation
            }
        }
    }
});

client.login(config.token);
