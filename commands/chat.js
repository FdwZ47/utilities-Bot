const Discord = require('discord.js');
module.exports = {
    name: 'chat',
    aliases: [],
    permissions: [],
    description: 'send messages to the channel',
    execute(client, message, args, Discord){
        
        if(message.author.id != 755767643331362916) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> For developer') .setDescription('only my developer can run this command') .setColor('#9542FF'));
 
        const channel = message.mentions.channel.first() ||
        message.guild.members.cache.get(args[0])?.channel;

        const channel = message.guild.channels.cache.find(c => c.name === channel);
        if(!channel) return message.channel.send('please spesific a channel');

        let messageArgs = args.join(' ');

        channel.send(messageArgs).then((msg) =>{
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}