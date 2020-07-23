//const botconfig = require("../../botconfig.json")
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "gamble",
    category: "or",
    run: async (client, message, args) => {
        const fruits = ['🥝', '🍇', '🍈']

        const random1 = fruits[Math.floor(Math.random() * fruits.length)];
        const random2 = fruits[Math.floor(Math.random() * fruits.length)];
        const random3 = fruits[Math.floor(Math.random() * fruits.length)];

        if(random1 === random2 && random2 === random3) {
            message.channel.send(`You won! ${random1} ${random2} ${random3}`)
        } else {
            message.channel.send(`You lost ${random1} ${random2} ${random3}`)
        }
    }
}