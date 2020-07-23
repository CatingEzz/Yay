const Discord = require('discord.js');
//const config = require('../botconfig.json');
//const apikey = require('../apikeys.json');
const Client = require('fortnite');
const fortnite = new Client('077b72f3-45ea-4e3c-a0e2-4e96c608e483');

//const Client = require('fortnite');    //("077b72f3-45ea-4e3c-a0e2-4e96c608e483");
const ft = new Client("077b72f3-45ea-4e3c-a0e2-4e96c608e483");

module.exports = {
    name: "ffortnite",
    aliases: ["fft", "fortnite"],
    category: "fun",
    description: "Display someone's stats, the current store, and challenges!!",
    usage: ">fortnite [ username of fortnite ]",
    run: async (client, message, args) => {
    let username = args[0];
    let gamemode = args[1] || 'lifetime';
    let platform = args[2] || 'pc';

    if (gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply("Usage: !fortnite <username> <gamemode> <platform>");

    if (!username) return message.reply('Please provide a username');

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;

        if (gamemode === 'solo') {
            let solostats = stats.solo

            let score = solostats.score;
            let matchesPlayed = solostats.matches;
            let wins = solostats.wins;
            let kills = solostats.kills;
            let kd = solostats.kd;

            let embed = new Discord.RichEmbed()
                .setTitle('Fortnite State Tracker <Solo>')
                .setAuthor(data.username)
                .setColor('#4423ff')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matchesPlayed, true)
                .addField('K/D', kd, true);

            message.channel.send(embed);

        } else if (gamemode == 'duo') {
            let duostats = stats.duo

            let score = duostats.score;
            let matchesPlayed = duostats.matches;
            let wins = duostats.wins;
            let kills = duostats.kills;
            let kd = duostats.kd;

            let embed = new Discord.RichEmbed()
                .setTitle('Fortnite State Tracker <Duo>')
                .setAuthor(data.username)
                .setColor('#4423ff')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matchesPlayed, true)
                .addField('K/D', kd, true);

            message.channel.send(embed);
        } else if (gamemode == 'squad') {
            let squadstats = stats.squad

            let score = squadstats.score;
            let matchesPlayed = squadstats.matches;
            let wins = squadstats.wins;
            let kills = squadstats.kills;
            let kd = squadstats.kd;

            let embed = new Discord.RichEmbed()
                .setTitle('Fortnite State Tracker <Squad>')
                .setAuthor(data.username)
                .setColor('#4423ff')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matchesPlayed, true)
                .addField('K/D', kd, true);

            message.channel.send(embed);
        } else {
            let lifetime = stats.lifetime;

            let score = lifetime[6]['Score'];
            let matchesPlayed = lifetime[7]['Matches Played'];
            let wins = lifetime[8]['Wins'];
            let winper = lifetime[9]['Win%'];
            let kills = lifetime[10]['Kills'];
            let kd = lifetime[11]['K/d'];

            let embed = new Discord.RichEmbed()
                .setTitle('Fortnite State Tracker <Lifetime>')
                .setAuthor(data.username)
                .setColor('#4423ff')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matchesPlayed, true)
                .addField('Win Percentage', winper, true)
                .addField('K/D', kd, true);

            message.channel.send(embed);
        }

    }).catch(e => {
        console.log(e);
        message.channel.send('Couldnt find that username in the database');
    });
}
}