const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    aliases: ['c', 'مسح', 'م'],
    permissions: ["MANAGE_MESSAGES"],
    description: "clear messages!",
    async execute(client, message, args, Discord) {

        const amount = new Discord.MessageEmbed()
        .setdescription('<a:srry:825769123686252545> please enter the amount of messages thet you want to clear')
        .setColor('RED')
        if(!args[0]) return message.channel.send(amount)
        if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setdescription('please enter a real number') .setColor('RED'));

        if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed() .setdescription('you can not delete more than 100 messages you only can between 1 - 100') .setColor('RED'));
        if(args[0] < 1) return message.channel.send(new Discord.MessageEmbed() .setdescription('you must delete atleaste one message') .setColor('RED'));

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}