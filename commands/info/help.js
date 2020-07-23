const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: ["h", "commands", "command", "helps"],
    category: "Info",
    description: "Returns all commands, or one specific command info",
    //example: "aww",
    usage: ">help",

       run: async (client, message, args) => {
           
        // if(message.author.id !== "710645707735957614") return;
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}
function getAll(client, message) {
    const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle('Click here for help, updates & more')
	    .setURL('https://discord.gg/y4KHYZN')
        .setAuthor('Commands List!', 'https://cdn.discordapp.com/avatars/714067151161393153/6fa0a33b8e35f002d25450d54a312867.png?size=2048') //'https://discord.gg/y4KHYZN')
        .setFooter(`Cating Bot | Developed by David </>#9999`)
        .setTimestamp()
        
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => ` \`${cmd.name}\``)
            //.join("\n");
    }
    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);
    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new RichEmbed()
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    let info = `No information found for command **${input.toLowerCase()}**`;
    if (!cmd) {
        return message.channel.send(embed.setColor("#ff0000").setDescription(info));
    }
    if (cmd.name) info = `**Command**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        //embed.setFooter(`Syntax: <> = required, [] = optional`);
    }
    
    if (cmd.example) info += `\n**Example**: ${cmd.example}`;
    
    return message.channel.send(embed.setColor("#0dff00").setDescription(info));
    
}