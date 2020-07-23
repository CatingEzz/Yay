const { Command } = require('discord.js-commando');
const cows = require('cows');
const rn = require('random-number');

module.exports = {
    name: "cow",
    aliases: ["cow"],
    category: "fun",
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">8ball [ answer ] ",
    run: async (bot, message, args) => {

    const options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    };
    const random = rn(options);
    message.channel.send(cows()[random], { code: ''});
}
}