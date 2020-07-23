const Discord = require("discord.js");

module.exports = {
    name: "invite",
    aliases: ["invite", "invites"],
    category: "info",
    description: "Get a users' avatar.",
    usage: ">id [user]",
    run: async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("***__Invite__***") //]") //(https://discord.com/api/oauth2/authorize?client_id=714067151161393153&permissions=8&scope=bot)")
 .setColor("#000000")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "[***Click to invite bot***](https://discord.com/api/oauth2/authorize?client_id=714067151161393153&permissions=8&scope=bot)")

 message.channel.send(inviteEmbed);

        message.delete();

}
}