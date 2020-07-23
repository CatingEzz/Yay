module.exports = {
    name: "finduser",
    aliases: ["finduser", "fu"],
    category: "onlyDavid",
    description: "exe",
    usage: "exe",
    run: async (bot, message, args) => {

        if(message.author.id !== "710645707735957614") return;

    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a term to search!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send(matches.map(u => u.tag));

    message.delete();

     }
}