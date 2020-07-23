const Discord = require("discord.js");

module.exports = {
    name: "serverlist",
    aliases: ["list"],
    category: "onlyDavid",
    description: "server",
    usage: "list",
    run: async (bot, message, args) => {
                
        //if(message.author.id !== "710645707735957614") return;

    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#000000")
        .addField("The bot is currently on these servers", string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}
}