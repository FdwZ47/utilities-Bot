// const Discord = require('discord.js');
// module.exports = {
//   name: 'join',
//   aliases: [],
//   permissions: ["ADMINISTRATOR"],
//   description: 'teams game',
//   async execute(client, message, args, Discord) {

//     //  if (!message.member.roles.has('826397439740477491')) return;
      
//     var redlimit = 4;
//     var redremine = 0;
//     var bluelimit = 4;
//     var blueremine = 0;

//       const red = message.guild.roles.cache.find(role => role.name === 'red');
//       const blue = message.guild.roles.cache.find(role => role.name === 'blue');


//       if (redremine < redlimit){
//       if (args[0] === 'red'){
//           message.member.roles.add(red)
//           redremine = redremine + 1;
//       }
//     } else {
//         return message.reply('limit')
//     }
//       if (blueremine < bluelimit){
//        if (args[0] === 'blue'){
//           message.member.roles.add(blue)
//           blueremine = blueremine + 1;
//       }
//     }
//   }
// }