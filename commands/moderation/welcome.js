const Discord = require('discord.js');

module.exports = {
    name: "welcome",
    //aliases: ["warn"],
   // category: "moderation",
    //description: "Display someone's stats, the current store, and challenges!!",
   // usage: ">8ball [ ",
    run: (client, message, args) => {

client.on('guildMemberAdd', member => {
    const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome')
        .addField('', member.nickname)
        .setImage(member.user.avatarURL)

    member.guild.channels.get('723142331372666920').send(exampleEmbed);
})
}
}