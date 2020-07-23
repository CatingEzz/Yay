module.exports = {
    name: "guildCreate",
    run: async (client, guild ) => {
    
    try {
        let c = client.channels.cache.get("720382824774893659");
        await client.helper.sendEmbed(c, "", `I have joined a server!`, `**Guild Name**: ${guild.name} (id: ${guild.id}). \n**MemberCount**: ${guild.memberCount}`, []);
    } catch(e) {
        console.error(e);
    }


  console.log(`The bot has been added to: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members.`);

}
}