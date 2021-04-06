const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    aliases: ['sl', 'مؤقت'],
    permissions: ["MANAGE_CHANNELS"],
    description: 'Sets SlowMode for a Channel',
async execute(client, message, args, Discord){
    if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('<:gears:819943211530977350> What do you want the slowmode to be set to? **type a number after the command**') .setColor('#DDFAFF'));
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('Please type a real number!') .setColor('RED'));
    if (args[0] > 21600 || args[0] < 0) return message.channel.send(new Discord.MessageEmbed() .setDescription('Number must be just between **1 - 21600**') .setColor('#3EBA9A'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> Slow Mode Has successfully set to **${args[0]}**`) .setColor('#E30B5C'))
        return;

    message.channel.send(new Discord.MessageEmbed() .setDescription(`Slow Mode set to ${args[0]}`) .setColor('RED'))

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
}
}