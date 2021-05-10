const Discord = require('discord.js');
module.exports = {
    name: 'echat',
    aliases: [],
    permissions: [],
    description: 'send messages in channel',
    async execute(client, message, args, Discord){
        if(message.author.id != 755767643331362916){
            message.delete();
             return message.channel.send(new Discord.MessageEmbed() .setDescription('only my developer can run this command') .setColor('#9542FF')).then(msg => msg.delete({timeout: 5500}))
        }
        const rchannel = message.mentions.channels.first();
        if(!rchannel) return; // message.channel.send('please specific a channel');

        if(!args[1]) return; // message.channel.send('please input something');


        const eEmbed = new Discord.MessageEmbed()
        .setDescription(args.slice(1).join(" "))
        .setColor('RANDOM')
       // let channels = message.mentions.channels.first()
       // const msg = args.join(" ")
       // if(!msg) return message.channel.send('please input something')
        
       rchannel.send(eEmbed)

      //message.channel.send(msg)
        

    }
}