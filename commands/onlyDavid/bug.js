//const botconfig = require("../../botconfig.json")
const Discord = require("discord.js");

module.exports = {
    name: "feedback",
    category: "mon",
    usage: "feedback <s|b> <message>",
    run: async (client, message, args) => {
        if(message.deletable) message.delete();

        let channel = message.guild.channels.find(ch => ch.name === 'suggestions-bugs');
	if(!args[0]) return message.reply("please supply an argument")
        if(args[0].toLowerCase() === "s") {
            const suggestionEmbed = new Discord.RichEmbed()
                .setTitle("SUGGESTION")
                .setAuthor(message.member.displayName, message.author.displayAvatarURL)
                .setColor("RANDOM")
                .setDescription(args.slice(1).join(" "))

            message.channel.send("You can find your suggestion in <#720432781792116836>").then(m => m.delete(4500));
            return channel.send(suggestionEmbed).then(msg => msg.react("✅").then(() => msg.react("🚫")));
        }
        
        if(args[0].toLowerCase() === "b") {
            const bugEmbed = new RichEmbed()
                .setTitle("BUG")
                .setColor("RANDOM")
                .setDescription(args.slice(1).join(" "));

            message.channel.send("You can find your bug report in <#630484725894479892>").then(m => m.delete(4500));
            return channel.send(bugEmbed);
        }
    }
}