const Discord = require("discord.js");

module.exports = {
    name: "user",
    aliases: ["userinfo"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (bot, message, args) => {
    const status = {
         online: "<a:ooonline:717807075702341673> Online",
         idle: "<a:iiidle:717807075459334256> Idle",
         dnd: "<a:dddnd:717807075329048616> Do Not Disturb",
         offline: "<a:oooffline:717807075366797332> Offline/Invisible"
        }
    let inline = true
    let resence = true
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:bott:717516241497096242> Yes";
  } else {
    bot = "👤 No";
  }

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<a:yyes:717809551470100490> Nickname: ${member.nickname}` : "<a:nno:717809551050801153> No"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<a:nno:717809551050801153> Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<a:nno:717809551050801153> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

    }
}