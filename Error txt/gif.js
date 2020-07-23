const Discord = require("discord.js")
const giphy = require('giphy-api')("lczGi9Z7Nh83LQUGJu7NohFAAO5GdOo1");

module.exports = {
    name: "gif",
    aliases: ["gif"],
    category: "onlyDavid",
    description: "",
    usage: "",
    run: async (bot, message, args) => {
  if (args.length === 0) {
    message.channel.send('<a:discordlogo:718049734148882472> No Seacrh!')
    return;
  }
  if (args.length === 1) {
    term = args.toString()
  } else {
    term = args.join(" ");
  }
  giphy.search(term).then(function (res) {
    // Res contains gif data!
    let id = res.data[0].id
    let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
    const embed = {
      "color": 3066993,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
        "text": "Powered by Giphy"
      },
      "image": {
        "url": msgurl
      },
      "fields": [
        {
          "name": "Search",
          "value": "`" + term + "`",
          "inline": true
        },
        {
          "name": "Page URL",
          "value": "[Giphy](" + res.data[0].url + ")",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });

  });

  message.delete();
}
}