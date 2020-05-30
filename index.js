const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

const client = new Client();

client.on("ready", () => {
    console.log(`I'm now online, my name is ${client.user.username}`);

    client.user.setPresence({
        statsu: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    });
});

// K I C K //
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");

      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

// B A N  //
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
            message.reply('I was unable to ban the member');

              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("You didn't mention the user to ban!");
      }
    }
});

// R . I . P //
client.on('message', message => {
    if (message.content === 'rip') {
      const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
      message.channel.send(`${message.author},`, attachment);
    }
});

client.on('message', message => {
  if (message.content === 'exe') {
    const attachment = new MessageAttachment('https://i.imgur.com/0dG2g3t.png');
    message.channel.send(`${message.author},`, attachment);
  }
});

// Logo Nacho //
client.on('message', message => {
  if (message.content === 'Nacho') {
    const attachment = new MessageAttachment('https://i.imgur.com/wP7VlO7.png');
    message.channel.send(`${message.author},`, attachment);
  }
});

// E M B E D //
client.on('message', message => {
    if (message.content === 'ez') {
      const embed = new MessageEmbed()
      .setColor('#ff0505')
      .setTitle('Regulament General')
      //.setURL('https://discord.js.org/')
      .setAuthor('David', 'https://i.imgur.com/wP7VlO7.png') //,'https://discord.js.org')
      .setDescription('1. N`u aveti` voie sa postati link-uri de la __fisiere/videoclipuri__ de pe **social** media. SANCTIUNE : ( 1 Warn )\n\n2. Este interzis sa adresati cuvinte jignitoare staff-ului sau membrilor. SANCTIUNE : ( 5m Mute )\n\n3. Este interzis sa faceti SPAM sau sa folositi CAPS LOCK in exces. SANCTIUNE : ( 10m Mute )\n\n4. Continutul NFSW este strict interzis pe cananlele necorespunzatoare. SANCTIUNE : ( 1 Warn )\n\n5. Folosirea aplicatiilor care modifica vocea sunt strict interzise. SANCTIUNE : ( 1 Warn + 15m Mute )\n\n6. Creerea certurilor pe canalele voice ( DE TiP PUBLIC 1,2,3,4 ) este interzisa. SANCTIUNE : ( 1 Warn + 10m Mute )\n\n7. Nu aveti voie sa puneti muzica pe canalele care NU sunt strict pentru muzica. SANCTIUNE : ( 1 Warn )')
      
      //.setThumbnail('https://i.imgur.com/wSTFkRM.png')

      .addFields(
          { name: 'Regulament General', value: '1' },

          //{ name: '\u200B', value: '\u200B' },
          //{ name: 'Inline field title', value: 'Some value here', inline: true },
          //{ name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Regulament General', '1', true)
      .setImage('https://i.imgur.com/wP7VlO7.png')
      .setTimestamp()
      .setFooter('David', 'https://i.imgur.com/wP7VlO7.png');
      message.channel.send(embed);
    }
});

client.on("message", async message => {
  const prefix = "?";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping") {
      const msg = await message.channel.send(`🏓 Pinging...`);

      msg.edit(`🏓 Pong\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\nAPI Latency ${Math.round(client.ping)}ms`); 
  }

  if (cmd === "say") {
      if (message.deletable) message.delete();

      if (args.length < 1)
          return (await message.reply("Nothing to say?")).attachments.then(msg => msg.delete({ timeout: 5000 }));
      
      const roleColor = message.guild.me.displayColor === "#2D3A9E" ? "#2D3A9E" : message.guild.me.displayHexColor

      if (args[0].toLowerCase() === "embed") {
          const embed = new MessageEmbed()
              .setColor(roleColor)
              .setDescription(args.slice(1).join(" "))
              //.setTimestamp()
          
          message.channel.send(embed);
      } else {
          message.channel.send(args.join(" "));
      }
  }
});

client.login('NzE2MjUwNTM3ODI1MjcxODI4.XtJCaQ.Eq87zkNs8-83aLzUBKnj82QvIO0');
// NzE0MDY3MTUxMTYxMzkzMTUz.Xs7uug.49rmm5VIVys76diwJM6CI8ngEmE