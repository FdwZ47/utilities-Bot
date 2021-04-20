const Discord = require('discord.js');
module.exports = {
  name: 'question',
  aliases: ['q','q&a'],
  cooldown: 10,
  permissions: ["USE_EXTERNAL_EMOJIS"],
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(client, message, args, Discord) {
   
    const games = new Discord.MessageEmbed()
        .setDescription('You can only use this command in <#796211852920487987>')
        .setColor('#9D6D55')
        if (message.channel.id !== '796211852920487987') return message.channel.send(games).then(msg => msg.delete({timeout: 5000}))

    if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = ['اي', 'لا <a:srry:825769123686252545>', 'اكيد']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setColor('RANDOM')
        .addField('سؤالك', question)
        .addField('جوابي', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};
//${user.username}