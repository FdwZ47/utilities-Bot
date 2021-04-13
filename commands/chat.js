const Discord = require('discord.js');
module.exports = {
    name: 'chat',
    aliases: [],
    permissions: [],
    description: 'send messages in channel',
    async execute(client, message, args, Discord){
        if(message.author.id != 755767643331362916) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> For developer') .setDescription('only my developer can run this command') .setColor('#9542FF'));
  
        const rchannel = message.mentions.channels.first();
        if(!rchannel) return message.channel.send('please specific a channel');

        if(!args[1]) return message.channel.send('please input something');


       // let channels = message.mentions.channels.first()
       // const msg = args.join(" ")
       // if(!msg) return message.channel.send('please input something')
        
       rchannel.send(args.slice(1).join(" "))

      //message.channel.send(msg)
        

    }
}