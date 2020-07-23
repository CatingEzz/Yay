const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "info",
  description: "Get a users' avatar.",
  usage: ">avatar [user]",

  run: async (client, message, args) => {

      let embed = new Discord.RichEmbed()

      .setColor("#000000")
      .setFooter("")
      .setDescription("[**Avatar URL Link**]("+mentionedUser.displayAvatarURL+")");

      message.channel.send(embed)
//msg.delete();
  }
}