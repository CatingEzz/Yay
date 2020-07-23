const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "profile",
    aliases: ["who", "user", "profile"],
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Member information:', stripIndents`**<a:22:717516241459347476> Display name:** ${member.displayName}
            **<a:22:717516241459347476> Username:** ${member.user.username}
            **<a:22:717516241459347476> Joined at:** ${joined}
            **<a:22:717516241459347476> Roles:** ${roles}`, true)

            .addField('User information:', stripIndents`**<a:22:717516241459347476> Tag**: ${member.user.tag}
            **<a:22:717516241459347476> Discriminator:** ${message.author.discriminator}
            **<a:22:717516241459347476> ID:** ${member.user.id}
            **<a:22:717516241459347476> Created at**: ${created}`, true)

            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**<a:22:717516241459347476> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}