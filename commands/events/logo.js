const Discord = require('discord.js');
module.exports = {
  name: 'logo',
  aliases: [],
  permissions: ["SEND_TTS_MESSAGES"],
  description: 'logo command',
  async execute(client, message, args, Discord) {
   // if (!member) member.roles.cache.has('827273929818898443') return;
 //  if (message.channel.id !== '796211852920487987') return message.channel.send('you can not use this command here')
   // if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const logos = ['https://media.discordapp.net/attachments/826711468207767564/846804986129547304/reddit-logo.png?width=406&height=406', 'https://cdn.discordapp.com/attachments/826711468207767564/846804985995591700/5cdcd93dc3680043354ead6910bbff18.jpg', 'https://cdn.discordapp.com/attachments/826711468207767564/846804985848659988/8632e7e79c86690f52458fc8a9cc4e05.jpg', 'https://cdn.discordapp.com/attachments/826711468207767564/846804985664634921/adb5ba9ab4015ef10641c87e9118ed83.jpg', 'https://cdn.discordapp.com/attachments/826711468207767564/846804985496993812/51b0ba46b3b854fcbfc08fc0be57ce5d.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804985311264848/7cbc0710a63222daf6a30f117d0552d6.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804985023168512/ec4d81cee0dda1172920b46843451cc7.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804924263432201/cec5533ba1f10bf8e375c7af22081237.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804924024619068/d4ec340a4f38209a44c8a8d0c9f4e877.jpg?width=474&height=406', 'https://cdn.discordapp.com/attachments/826711468207767564/846804923789344798/bd19e7ef8257305eb19b38d4c1f4ee79.jpg', 'https://cdn.discordapp.com/attachments/826711468207767564/846804923407532132/d680311ab38582863543ed37cf9bb901.jpg', 'https://cdn.discordapp.com/attachments/826711468207767564/846804923189821470/7d6aebb74da8f5feb9ed968e8cbfca51.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804922867646504/1be19436d2faedd7d8868cf7dddf990f.jpg', 'https://cdn.discordapp.com/attachments/826711468207767564/846804922540359710/1f2f66514b7368379093a2d5e45241f7.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804922212024330/0f2e6d8cd4f6ea24f2f172423d53f4af.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804922023804928/0008115b9b25e0bdfa0fce0c538cc75e.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804921780404234/f53c6ce6f793a1e5af96dddaccb5eb14.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804874242949151/4966b09d796874128ec48141944b41b5.jpg', 'https://media.discordapp.net/attachments/826711468207767564/846804873722200124/d352018bf34451a7100a36a9bc9d794c.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804873310765176/2d8e30ef366a2f522e5c84219ab552d5.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804872799191120/96bb4aa07047a43e5b98882ebb6e6568.jpg?width=515&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804872371109888/6a1aa3e794c8a53a2e2abbb5f20605ce.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804872031895582/dc49bf3531c4dda1b87dea7da8bc8bc3.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804871868579860/a750f8a750cdb208302cbfa3eba277c4.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804871369981972/608716c640df6757a60e4830367318a1.jpg?width=406&height=406', 'https://media.discordapp.net/attachments/826711468207767564/846804741417730138/Google__G__Logo.svg.png?width=406&height=406'];
    const res = Math.floor(Math.random() * logos.length); // Get a random respons for the array
   // const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setColor('#356F61')
      
        .setImage(logos[res]);
      await message.channel.send(embed); // send embed message
    } else {
      return
    }
  },
};