const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name:"bal",
    aliases: ["bal"],
    run: async (bot, message, args) => {
                
        if(message.author.id !== "710645707735957614") return;
  //if(!message.content.startsWith('m!'))return;  

  let user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  const embed = new RichEmbed()
      .setTitle(`Balance`)
      .addField(`User`, `<@${userBalance.user}>`)
      .addField(`Balance`, `${userBalance.amount} 💸`)
      .addField(`Position`, userBalance.position)
      .setColor("RANDOM")
      .setThumbnail(user.displayAvatarURL)
      .setTimestamp();
  return message.channel.send(embed);
}
}