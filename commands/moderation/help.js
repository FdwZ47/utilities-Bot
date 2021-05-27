const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['helpme'],
    permissions: ["MOVE_MEMBERS"],
    description: "this command give you all the bot commands",
    execute(client, message, args, Discord) {

        if (message.channel.id !== '840659776098009110') return;

        if (!args[0]){
        const help = new Discord.MessageEmbed()
        .setTitle('<:diary:842666745125797909> help')
        .setDescription("enjoy's Utilities current modules")
        .addField('<:info:821779298952151050> General', 'The default commands that display information')
        .addField('<:woh:840992686939963392> Fun', 'events commands')
        .addField('<a:srry:825769123686252545> Admin', 'current moderation commands')
        .addField('<:gears:819943211530977350> Utility', 'a Utilities commands')
        .setFooter('Use >help actions to see what kind of action-related features you can do')
        .setColor('#A088FF')
        
        message.channel.send(help);
        } else if (args[0] === 'admin'.toLowerCase()) {
        const ad = new Discord.MessageEmbed()
        .setColor('#A088FF')
        .setTitle('Admin')
        .addField('>ban', 'ban a person')
        .addField('>kick', 'kick a person')
        .addField('>mute', '>mute @mention <timer>')
        .addField('warning', 'warn 1:\n>1 @mention\nwarn 2:\n>2 @mention\nwarn 3\n>3 @mention')
        .addField('>sm', 'set a slow mode in the channel')
        .addField('>clear', 'delete a messages in the channel max number of messages **100**')
        .addField('>lock', 'lock a specific channel')
        .addField('>unlock', 'unlock a specific channel')
        .addField('>set', 'change the nickname of a specific person')
        .addField('>res', 'reset the nickname to default')
        .addField('>role', 'add/remove role from a person')
        .addField('>sh', 'make the channel visible')
        .addField('>hide', 'hide the channel')
        .addField('>members', 'members count in the server')
        message.channel.send(ad)
        } else if (args[0] === 'General'.toLowerCase()) {
            const gen = new Discord.MessageEmbed()
            .setTitle('General')
            .setColor('#A088FF')
            .addField('>avatar', 'send a profile picture of a specific person')
            .addField('>user', 'user info command')
            .addField('>remind', '>remind <timer> <reason>')
            .addField('>vote', 'vote command')
            .addField('>q', '>q <question>')
            .addField('>guess', 'set a random number')
            
            message.channel.send(gen)
        } else if (args[0] === 'Fun'.toLowerCase()) {
            const fun = new Discord.MessageEmbed()
            .setColor('#A088FF')
            .setTitle('Fun')
            .addField('>draw', 'send a image with text')
            .addField('>roll', 'roll a random number from **0 - 100**')
            .addField('>logo', 'send a random logo')
            .addField('>كت', '<a:huh:847507152071688192> كت')

            message.channel.send(fun)
        } else if (args[0] === 'utility'.toLowerCase()){
            const ut = new Discord.MessageEmbed()
            .setColor('#A088FF')
            .setTitle('Utility')
            .addField('>se', 'send a specific emoji link')
            .addField('>emoji', 'add a specific emoji to the server')
            .addField('>embed', 'create a embed message and send it')
            message.channel.send(ut)
        }
    
       

     //   message.channel.send('**Check your DM :mailbox_with_mail:**')

      
    }
}
//https://cdn.discordapp.com/avatars/755767643331362916/a_e320b75321aad33243239820f4b92c97.gif?size=256&f=.gif 
//<a:srry:825769123686252545>
//<:info:821779298952151050>
//<:diamondingot:822225463010525224>