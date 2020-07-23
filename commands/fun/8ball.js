const Discord = require("discord.js")
 
module.exports = {
    name: "8ball",
    aliases: ["8b", "8ball"],
    category: "fun",
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">8ball [ answer ] ",
    run: async (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
   let replies = ["Yes", "No", "I don't know", "Ask again later!", "Cyka", "I am not sure!", "Pls No", "You tell me", "Pls Yes"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let ballembed = new Discord.RichEmbed()

   .setAuthor(message.author.username)
   .setColor("RANDOM")
   .addField("Question", question)
   .addField("Answer", replies[result]);

   message.channel.send(ballembed)

   message.delete();

    }
}