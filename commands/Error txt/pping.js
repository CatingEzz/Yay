module.exports = {
    name: "pping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if(message.author.id !== "710645707735957614") return;
        const Discord = require('discord.js')

        exports.run = (bot, message, args) => {  
        const pingUpdate = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription('pinging...')
        message.channel.send(pingUpdate);
        }
    
    }
}