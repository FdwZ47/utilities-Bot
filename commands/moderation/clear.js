const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    aliases: ['c', 'مسح', 'م'],
    permissions: ["MANAGE_MESSAGES"],
    description: "clear messages!",
    async execute(client, message, args, Discord) {

        if(!args[0]) return 
        if(isNaN(args[0])) return; //message.reply('please enter a real number')

        if(args[0] > 100) return; //message.reply('you can not delete more than 100 messages you only can between 1 - 100')
        if(args[0] < 1) return; //message.reply('you must delete atleaste one message') 
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}