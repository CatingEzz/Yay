const Discord = require('discord.js');

module.exports = {
    name: "role",
    aliases: ["role"],
    category: "onlyDavid",
    description: "role",
    usage: "role",
    run: async (bot, message, args) => {
                
        if(message.author.id !== "710645707735957614") return;
        const role = message.mentions.roles.first() || message.guild.roles.get(args[0]);

        if (!role) {
            return message.reply('please enter a valid role.');
        }
        const permsObj = role.serialize();
        const permissions = Object.keys(permsObj).filter(perm => permsObj[perm]);
        const roleEmbed = new Discord.RichEmbed()
                .setColor(role.hexColor)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Role Info')
                .addField(':arrow_right: Name', role.name, true)
                .addField(':arrow_right: ID', role.id, true)
                .addField(':arrow_right: Creation Date', role.createdAt.toDateString(), true)
                .addField(':arrow_right: Hoisted', role.hoist ? 'Yes' : 'No', true)
                .addField(':arrow_right: Mentionable', role.mentionable ? 'Yes' : 'No', true)
                .addField(':arrow_right: Permissions', permissions.join(' | ') || 'None');

        message.channel.send(roleEmbed);
    },
};