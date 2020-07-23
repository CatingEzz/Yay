const { RichEmbed } = require('discord.js')

module.exports = {
    name: "info",
    aliases: ["help"],
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">help",

    run: async (bot, message, args) => {

    const settings = message.settings
    const channel = message.channel
    const embed = new RichEmbed()
      .setAuthor(`#${channel.name}`, message.guild.iconURL)
      .setColor("RANODM")
      .addField('Topic', `${channel.topic}`, false)
      .addField('Position', `${channel.position}`, true)
      .setTimestamp()
      .setFooter(settings.embedFooter, settings.embedIcon)
    return ({ embed }).catch(e => console.error(e))
  }
}