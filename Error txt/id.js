const Discord = require("discord.js");

module.exports = {
    name: "id",
    aliases: ["id"],
    category: "info",
    description: "Get a users' avatar.",
    usage: ">id [user]",
    run: async (client, message, args) => {

        if(message.author.id !== "710645707735957614") return;
        
    let msg = async (bot, message, args) => {
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

message.channel.send(`ID: \`${member.user.id}\`.`);

message.delete();
    }
}}