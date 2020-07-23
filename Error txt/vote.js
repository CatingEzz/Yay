const agree = ':white_check_mark:';
const disagree = ':negative_squared_cross_mark:';

module.exports = {
    name: "vote",
    aliases: ["vote"],
    category: "onlyDavid",
    description: "vote",
    usage: "vote",
    run: async (bot, message, args) => {
                
        if(message.author.id !== "710645707735957614") return;

        let msg = await message.channel.send("Vote!");
        await msg.react(agree);
        await msg.react(disagree);

        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name == agree || reaction.emoji.name == disagree, { time: 15000 });
        message.channel.send(`Voting complete! \n\n${agree}: ${reactions.get(agree).count - 1}\n${disagree}: ${reactions.get(disagree).count - 1}`);
    },
};