const Discord = require('discord.js');
module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute( client, message, args){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('there is no suggestions channel');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#00CFC9')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('')
            msg.react('')
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}