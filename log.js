 const Discord = require('discord.js');
 module.exports = (client) => {
     client.on('messageDelete', message => {
         snipes.set(message.channel.id, message)

         const log = message.guild.channels.cache.get('826711468207767564')
         const embed = new Discord.MessageEmbed()
         .setAuthor(`${message.author}`)
     .setDescription(`${message.author}\nin ${message.channel}\n${message.content}`)
        .addField(``, `in ${message.channel}\n${message.content}`)
        .setColor('#00FFEC')
         .setFooter(`ID: ${message.author.id}`, message.author.displayAvatarURL())
        .addField('channel', )
     log.send(embed)
     })
 }