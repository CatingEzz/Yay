const Discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
  name: "ascii",
  aliases: ["ascii", "as"],
  category: "Fun",
  description: "Converts the text to ASCII art using FIGlet",
  usage: ">ascii [ text ]",

    run: async (bot, message, args) => {

      message.delete();
  if (!args[0])
    return message.channel.send("**Please provide something to convert.**");
  figlet(args.join(" "), (err, data) => {
    message.channel.send("```" + data + "```");
  });
}}
