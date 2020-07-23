const Discord = require("discord.js");

module.exports = {
    name: "poll",
    aliases: ["poll"],
    category: "oid",
    description: "poll",
    usage: "poll",
    run: async (bot, message, args) => {
                
        if(message.author.id !== "710645707735957614") return;

    let title = args.slice(0, 1).join(' ');
    let poll = args.splice(1, args.length).join(' ');

    //if (!message.member.roles.has(staffRole) && message.author.id != client.config.ownerID) {message.channel.send(client.noperms(`clear`, `staff`)); return;}
    if (!title) {message.channel.send(client.errorEmbed('Please provide a title for the poll', `>poll <title> <poll>`)); return;}
    if (!poll) {message.channel.send(client.errorEmbed('Please provide a poll for the poll', `>poll <title> <poll>`)); return;}

    return message.channel.send(client.embed(title, poll, `Submitted by ${message.author.username}`)).then(function (message) {message.react(`✅`).then(() => {message.react(`❎`)})});

}
}