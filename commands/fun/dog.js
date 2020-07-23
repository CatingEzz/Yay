const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');
const Discord = require("discord.js");

module.exports = {
    name: "dog",
    aliases: ["dog"],
    category: "fun",
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">cat [ username of fortnite ]",
    run: async (bot, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage(body.url)
    .setColor("#00ff00")
    .setTitle("🐶 Here is your random dog");

    message.channel.send(embed);
}
}

