const Discord = require('discord.js');
module.exports = {
  name: 'كت',
  aliases: ['c'],
  permissions: ["USE_EXTERNAL_EMOJIS"],
  description: 'cut tiwit command',
  async execute(client, message, args, Discord) {
    //if (message.channel.id !== '796211852920487987') return message.channel.send('you can not use this command here')
   // if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = ['اي', 'لا', 'لا طبعا', 'ممكن', 'لا تسألني', 'وش رأيك انت', 'ما اعرف <:idk:822217580567592991> ', 'الحقيقة...']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
   // const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setColor('#CAC0FF')
        //.addField('سؤالك', question)
        .addField('كت تويت', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**كت تويت**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};