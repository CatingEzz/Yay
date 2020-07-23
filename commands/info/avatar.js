  const Discord = require("discord.js");

  module.exports = {
    name: "avatar",
    aliases: ["av"],
    category: "info",
    description: "Get a users' avatar.",
    usage: ">avatar [user]",
    run: async (client, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("#000000")
        //.setTitle("Avatar")
        .setFooter("Searched by " + message.author.username, message.author.avatarURL)
        .setDescription("[**Avatar URL Link**]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)
 msg.delete();
    }
}
