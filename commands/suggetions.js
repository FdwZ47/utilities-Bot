const Discord = require('discord.js');
module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(client, message, args){
        const channel = message.guild.channels.cache.find(c => c.name === '「📨」suggest');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('<a:yes:822217053863673856>');
            msg.react('<a:no:826693930678616104>');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}