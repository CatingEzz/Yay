const Discord = require("discord.js");

module.exports = {
    name: "donate",
    aliases: ["donate"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
let donateEmb = new Discord.RichEmbed()
.setColor("#000000")
.setTitle("Donate")
.setDescription("Donate for the bot trough this links!")
.addField("💙 PayPal Donate", "[***PayPal***](https://paypal.me/hasdavid?locale.x=en_US)")                       //(https://paypal.me/hasdavid)")
.addField("🧡 Patreon Donate", "***Coming Soon!***")   //(https://www.patreon.com/bePatron?c=1218005)")
.addField("🔷 Steam Donate", "[***Steam***](https://steamcommunity.com/tradeoffer/new/?partner=364593761&token=ZRZ9Shoj)")
.setFooter("Donation links for the bot!")
.setThumbnail(bicon)

message.channel.send(donateEmb)

//message.delete();

}
}