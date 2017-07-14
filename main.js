/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.login("MzI5OTI5OTgwMDc3MTQ2MTE0.DDZmww.9QTLSv4Lv9gtd19p_7ZEgL07JG4")

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "symbol")) {
        console.log(message.embeds.toString());
    }
});
