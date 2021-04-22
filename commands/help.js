const Discord = require('discord.js');

module.exports = {
    name: 'mod',
    aliases: ['helpme'],
    permissions: ["MUTE_MEMBERS"],
    description: "this command give you all the bot commands",
    execute(client, message, args, Discord) {


        const moderation = new Discord.MessageEmbed()
           // .setTitle('<:pickaxe:821829362227347526> moderation commands')
            //.setdescription('here is all the moderation commands if you see any issues in the bot DM my developer')
            .addField('<:pickaxe:821829362227347526> moderation commands', 'here is all the moderation commands if you see any issues in the bot DM my developer')
            .addField('warn', 'warn 1 = >1 <@mention> | warn 2 = >2 <@mention> | warn 3 = >3 <@mention> | for:\nMOD\nAdmin')
            .addField('ban', '>ban <@mention> \nAdmin')
            .addField('kick', '>kick <@menton> \nAdministrator')
            .addField('mute', '>m <@mention> \nMOD \nAdmin')
            .addField('unmute', '>un <@mention> \nMOD \nAdmin')
            .addField('setnick', '>set <@mention> <new nick> \nAdmin')
            .addField('reset nick', '>res <@mention> | for:\nAdmin')
            .addField('move', '>move <@mention> \nAdmin')
            .addField('lock', '>lock \nAdministrator')
            .addField('unlock', '>unlock \nAdministrator')
            .addField('hide', '>hi \n Administrator')
            .addField('show', '>sh \nAdministrator')
            .addField('clear', '>c <number> \nAdministrator')
            .addField('slowmode', '>sm <number> \nAdministrator')
            .setColor('RANDOM')
           // .setFooter('Bot Developer Tanya#0762', 'https://cdn.discordapp.com/avatars/755767643331362916/783894bb179b5920aab0bf8b890012b1.png?size=2048')


        message.delete();
        message.author.send(moderation);

     //   message.channel.send('**Check your DM :mailbox_with_mail:**')

      
    }
}
//https://cdn.discordapp.com/avatars/755767643331362916/a_e320b75321aad33243239820f4b92c97.gif?size=256&f=.gif 
//<a:srry:825769123686252545>
//<:info:821779298952151050>
//<:diamondingot:822225463010525224>