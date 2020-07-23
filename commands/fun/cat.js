const Commando = require('discord.js-commando');
const request = require('request'); 

const Discord = require("discord.js")

module.exports = {
    name: "cat",
    aliases: ["cat"],
    category: "fun",
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">cat [ username of fortnite ]",
    run: async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#000000")
                    .setTitle("🐱 Here is your random cat")
                              
                   message.channel.send(emb)  
            }
        });
    }
}
