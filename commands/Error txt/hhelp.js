const Discord = require("discord.js");

module.exports = {
    name: "hhelp",
    category: "help",
    run: async (bot, message, args) => {
        
    if(message.author.id !== "710645707735957614") return;
    let botembed = new Discord.RichEmbed()

    .setColor('RANDOM')
	.setTitle('Commands List')
//	.setURL('https://discord.gg/')
	.setAuthor('Some name', 'https://i.imgur.com/IJS8J1l.png', 'https://discord.js.org')
	.setDescription('***__Coming soon fot this__*** | Use ***>help [ command ]*** to get more help! Example: ***>help ping***')
//	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
//	.addField('Regular field title', 'Some value here')
	.addBlankField()
    .addField(' ℹ️ ***Info***', '`botinfo` `ping`', true)
    .addBlankField()
    .addField(' 🎮 ***Fun***', '`8ball` `love` `meme` `rps`', true)
    .addBlankField()
    .addField(' 🌐 ***Social***', '`fortnite` `instagram`', true)
    .addBlankField()
    .addField(' 🧬 ***Utilities***', '`profile` `avatar` `userinfo`', true)
    .addBlankField()
    .addField(' 🛠️ ***Moderation***', '`ban` `unban` `warn` `say` `report` `kick`', true)
    .addBlankField() 
//	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter(`Information about `);
    
    message.channel.send(botembed);
    }
}