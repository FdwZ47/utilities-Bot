const Discord = require('discord.js');
module.exports = {
    name: 'chat',
    aliases: [],
    permissions: [],
    description: 'send messages in channel',
    async execute(client, message, args, Discord){
        if(message.author.id != 755767643331362916) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> For developer') .setDescription('only my developer can run this command') .setColor('#9542FF'));
  
        let channels = message.guild.channels.cache.get(args[0])
        if(!channels) return message.channel.send('please specific a channel')

       // let channels = message.mentions.channels.first()
        let msg = message.content.join("")
        
      //  message.guild.channels.find(c => c.id == channels.id).send(message);

        channels.channel.send(msg)
        

    }
}