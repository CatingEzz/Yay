const Discord = require("discord.js");

module.exports = {
    name: "poll",
    aliases: ["poll"],
    category: "onlyDavid",
    description: "poll",
    usage: "poll",
    run: async (bot, message, args) => {
                
        if(message.author.id !== "710645707735957614") return;

        const messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
    
        let channel = message.mentions.channels.first();
        if (!channel) {
          channel = message.channel;
          args = messageArray.slice(0);
        }
        const announcement = args.slice(1).join(" ");
    
        const msg = await channel.send(announcement);
        message.delete();
        await msg.react("✅");
        await msg.react("❌");
      }
    }