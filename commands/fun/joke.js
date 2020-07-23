const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports = {
    name: "joke",
    aliases: ["joke"],
    category: "fun",
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">joke ",
    run: async (bot, message, args) => {
    giveMeAJoke.getRandomCNJoke(function(joke){
        message.channel.send(joke)
    })
}
}