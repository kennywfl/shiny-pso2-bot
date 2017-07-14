/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("ready", function() {
    console.log("I am ready!");
});

client.on("message", function(message) {
    if (!message.content.startsWith(config.prefix) || message.author.bot) {
        return;
    }
    if (message.content.startsWith(config.prefix + "symbol1")) {
        const data = {
            "content": "@{$message.author.id}",
            "embed": {
                "image": {
                    "url": "http://i.imgur.com/axRBLCL.png"
                }
            }
        };
        message.reply(data);
    }
});

client.login(config.token);
