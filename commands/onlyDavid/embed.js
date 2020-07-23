const Discord = require("discord.js")

module.exports = {
    name: "embed",
    aliases: ["embed"],
    category: "",
    description: "Add a new role, with optional color and hoist.",
    usage: ">addrole <@user> <Role>",
    run: async (bot, message, args) => {

  if(message.author.id !== "710645707735957614") return;

  const cmd = args.join(' ').split(' | ')

  let emb = new Discord.RichEmbed()
  .setTitle(cmd[0])
  .setColor(cmd[1])
  .setDescription(cmd[2])
  .setTimestamp()

  message.channel.send(emb)
  
  message.delete();
}
}