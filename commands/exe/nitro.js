const Discord = require("discord.js");

module.exports = {
    name: "n",
    run: async (bot, message, args) => {
    let inline = true
    //let bicon = bot.user.displayAvatarURL;
    //let usersize = bot.users.size
    //let chansize = bot.channels.size
   // let uptimxd = bot.uptime 
   // let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('Here you will find the prices for a Discord Bots and what comes with it!')
	//.setURL('https://discord.js.org/')
	.setAuthor('Discord Bot', 'https://cdn.discordapp.com/attachments/719630503682113618/723331779565715466/images_1.png')
	.setDescription(' > Bot Contents and Price:')
	//.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	//.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Basic Bot', 'Comes with basic moderation commands', true)
	.addField('Custom Bot', 'Any sort of bot you want', true)
   // .addField('Bot Repair', 'If your bot has broken due to the code and we made it, it shall be fixed for free! If it has broken becuase you were messing with it or we did not program the code it will cost you depending on how broken it is.', true)
    .addBlankField()
	.addField('Bot Upgrade', 'We will re-program your bot and make it even better!', true)
    .addField('Bot Hosting', 'Host your bot 24/7 with a monthly fee', true)
	.setThumbnail('https://cdn.discordapp.com/attachments/719630503682113618/723331779565715466/images_1.png')
	.addBlankField()
	.addField('Basic Bot', '3-4€ 💵 one time payment', true)
	.addField('Custom Bot', '5-20€ 💵 one time payment (depends what you want)', true)
    .addBlankField()
	.addField('Bot Upgrade', '2-5€ 💵', true)
	.addField('Bot Hosting', '4€ 💵 monthly payment', true)
	.setImage('https://cdn.discordapp.com/attachments/719630503682113618/723331784925905006/images_3.jpg')
	.setTimestamp()
	.setFooter('Discord Bots', 'https://cdn.discordapp.com/attachments/719630503682113618/723331779565715466/images_1.png');
    
    message.channel.send(botembed);
    }
}