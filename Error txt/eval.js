const Discord = require("discord.js")
const Client = new Discord.Client

module.exports = {
    name: "eval",
    aliases: ["eval"],
    category: "moderation",
    description: "Add a new role, with optional color and hoist.",
    usage: ">addrole <@user> <Role>",
    run: async (bot, message, args) => {

  if(message.author.id !== "710645707735957614") return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
}