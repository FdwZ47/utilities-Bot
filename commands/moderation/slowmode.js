const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    aliases: ['sm', 'مؤقت'],
    permissions: ["MANAGE_CHANNELS"],
    description: 'Sets SlowMode for a Channel',
    async execute(client, message, args, Discord){
      
    // if (!message.member.roles.cache.has('820633984211615755')) return;  
    // if (!message.member.roles.cache.has('807184589457063967')) return;  
    // if (!message.member.roles.cache.has('805321132331892766')) return;
    if (!args[0]) return; //message.channel.send(`current slow mode is ${message.guild.channel.RateLimit}`)
    if(isNaN(args[0])) return; // message.channel.send(new Discord.MessageEmbed() .setDescription('Please type a real number!') .setColor('RED'));
    if (args[0] > 21600 || args[0] < 0) return; //message.channel.send(new Discord.MessageEmbed() .setDescription('Number must be just between **1 - 21600**') .setColor('#3EBA9A'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        // message.delete().catch(error => {
        //     if (error.code !== 10008) {
        //         console.error('failed to delete the message', error);
        //     }
        // });
        message.channel.send(`Slowmode set to \`${args[0]}\` seconds`);
        return;

    message.channel.send(new Discord.MessageEmbed() .setDescription(`Slow Mode set to ${args[0]}`) .setColor('RED'))

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
   
    
}
}


//(new Discord.MessageEmbed() .setDescription('<:gears:819943211530977350> What do you want the slowmode to be set to? **type a number after the command**') .setColor('#DDFAFF'))