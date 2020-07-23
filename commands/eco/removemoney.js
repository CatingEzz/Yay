const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name:"removemoney",
  aliases: ["rm"],
  run: async (bot, message, args) => {

  //if(!message.content.startsWith('m!'))return;  
  let ownerID = '710645707735957614'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

}
}
