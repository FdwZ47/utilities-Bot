// const Discord = require('discord.js');
// module.exports = {
//     name: 'evaluate',
//     aliases: [],
//     permissions: [],
//     description: 'send messages in channel',
//     async execute(client, message, args, Discord, eval){
//         client.on('eval' , (message) => {
//         const ownerId = '755767643331362916' 
//         if(message.author.id != 755767643331362916){
//             message.delete();
//              return message.channel.send(new Discord.MessageEmbed() .setDescription('only my developer can run this command') .setColor('RANDOM')).then(msg => msg.delete({timeout: 4000}))
//         }
//         if (member.id === ownerId) {
//             const result = eval(content.replace('>evaluate', ''))
//             channel.send(result)
//           }
//         })
   
//     }
// }