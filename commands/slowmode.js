const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    aliases: ['sl', 'مؤقت'],
    description: 'Sets SlowMode for a Channel',
async execute(message, args){
    if (!message.member.hasPermission("MANAGE_CHANNELS")){
        messages.channel.send(new Discord.MessageEmbed() .setDescription('You **Cannot** do that because you don t have permissions') .setColor('RED'))
        return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('What do you want the slowmode to be set to? **type a number after the command**') .setColor('RED'));
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('Please type a real number!') .setColor('RED'));
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed() .setDescription('Number must be just between 1 - 21600') .setColor('RED'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed() .setDescription(`Slow Mode Has successfully set to ${args[0]}`) .setColor('#E30B5C'))
        return;

    message.channel.send(new Discord.MessageEmbed() .setDescription(`Slow Mode set to ${args[0]}`) .setColor('RED'))

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
}
}