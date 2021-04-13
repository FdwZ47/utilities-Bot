const Discord = require('discord.js');
module.exports = {
    name: 'chat',
    aliases: [],
    permissions: [],
    description: 'send messages in channel',
    async execute(client, message, args, Discord){
        if(message.author.id != 755767643331362916) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> For developer') .setDescription('only my developer can run this command') .setColor('#9542FF'));
  
        let rchannel = message.guild.channels.cache.get(args[0])
        if(!rchannel) return message.channel.send('please specific a channel')

       // let channels = message.mentions.channels.first()
        const msg = message.content.split().join("")
        if(!msg) return message.channel.send('please input something')
        
        rchannel.channel.send(msg)

      //message.channel.send(msg)
        

    }
}