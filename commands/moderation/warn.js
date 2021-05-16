// const Fs = require('fs');
// const Discord = require('discord.js');
// const ms = require('ms');
// module.exports = {
//     name: 'warn',
//     aliases: ['w', 'انذار'],
//     permissions: ["MUTE_MEMBERS"],
//     description: "this command warns a member",
//     execute(client, message, args, Discord){

//         const target = message.mentions.users.first() ||
//         message.guild.members.cache.get(args[0])?.user;

//      //   const reason = args[1].join(" ")

//         if (target){

//             let warnRole3 = message.guild.roles.cache.find(role => role.name === 'Warning 3');
//             let warnRole2 = message.guild.roles.cache.find(role => role.name === 'Warning 2');
//             let warnRole1 = message.guild.roles.cache.find(role => role.name === 'Warning 1');

//             var warnsJSON = JSON.parse(Fs.readFileSync('./warnroles.json'))


//                 if (!warnsJSON[message.author.id]) {
//                     warnsJSON[message.author.id] = {
//                         warns: 0
//                     }

//                     Fs.writeFileSync('./warnroles.json', JSON.stringify(warnsJSON))
//                 }

//                 warnsJSON[message.author.id].warns += 1
//                 Fs.writeFileSync('./warnroles.json', JSON.stringify(warnsJSON))


//                 setTimeout(function () {

//                     warnsJSON[message.author.id].warns -= 1
//                     Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
//                 }, ms('1h'))



//                 if (Number.isInteger(warnsJSON[message.author.id].warns = 1)) {
//                     var warnEm1 = new Discord.MessageEmbed()
//                         .setDescription(`<@${target.id}> has been **warned** **|** \`${target.id}\``)
//                         .setColor('#E3A781')
//                     message.channel.send(warnEm1)

//                     target.roles.add(warnRole1.id)

//                 } else if (Number.isInteger(warnsJSON[message.author.id].warns = 2)){
//                     var warnEm2 = new Discord.MessageEmbed()
//                     .setDescription(`<@${target.id}> has been **warned** **|** \`${target.id}\``)
//                     .setColor('#E3A781')
//                 message.channel.send(warnEm2)

//                 target.roles.add(warnRole2.id)

//                 } else if (Number.isInteger(warnsJSON[message.author.id].warns = 3)){
//                     var warnEm3 = new Discord.MessageEmbed()
//                     .setDescription(`<@${target.id}> has been **warned** **|** \`${target.user.id}\``)
//                     .setColor('#E3A781')
//                 message.channel.send(warnEm3)

//                 target.roles.add(warnRole3.id)
//                 }

//         }
//     }
// }