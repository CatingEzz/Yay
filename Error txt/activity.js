module.exports = {
    name: "acti",
    aliases: ["act"],
    category: "onlyDavid",
    description: "a",
    usage: "ac",
    run: async (bot, message, args) => {
                
        if(message.author.id !== "710645707735957614") return;

        return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You are not a Terminal developer.")

    switch (args[0]) {
        case 'p': //setting activity to "playing"
            client.user.setActivity(args.splice(1).join(' '), { type: 'playing' });
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + '**Playing** status ready.');
            break;
        case 'w': //setting activity to "watching"
            client.user.setActivity(args.splice(1).join(' '), { type: 'watching' });
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + '**Watching** status ready.')
            break;
        case 'l': //setting activity to "listening"
            client.user.setActivity(args.splice(1).join(' '), { type: 'listening' });
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + '**Listening** status ready.');
            break;
        case 's': //setting activity to "streaming"
            client.user.setActivity(args.splice(1).join(' '), { type: "STREAMING", url: "https://www.twitch.tv/monstercat" });
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + '**Streaming** status ready.');
            break;
        case 'default': // resets current activity to config activity
            client.user.setActivity(config.activity, { type: config.status });
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + 'Reset activity');
            return;
    }
}
}