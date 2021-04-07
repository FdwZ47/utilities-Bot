const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['helpme'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you all the bot commands",
    execute(client, message, args, Discord) {

        const info = new Discord.MessageEmbed()
            .setTitle('<:diamondingot:822225463010525224> information')
            .addField('**<:gears:819943211530977350> prefix**', 'Bot prefix: >')
            .addField('**pages**', '1-moderation  |  2-misc  |  3-explain')
            .setColor('#93BF6')

        const moderation = new Discord.MessageEmbed()
            .setTitle('<:pickaxe:821829362227347526> moderation commands')
            .setDescription('All the commands below is only for Moderators (members have permissions to use the command)')
            .addField('ban', '<a:srry:825769123686252545> this bans the member')
            .addField('kick', 'this kicks the member from the server')
            .addField('mute', 'this mute the member')
            .addField('unmute', 'this remove the mute from muted member')
            .addField('setnick', 'this command change the member nickname')
            .addField('move', 'this move the member to your voice channel')
            .addField('lock', 'this lock the text channel')
            .addField('unlock', 'this unlock the text channel')
            .addField('hide', 'this hide the channel so no one can see it')
            .addField('show', 'this show the channel so everyone can see it')
            .addField('clear', 'this delete the messages in text channel')
            .setColor('#DDFAFF')

        const misc = new Discord.MessageEmbed()
            .setTitle('Misc cmds')
            .setDescription('All the commands Below everyone can use it')
            .addField('user', 'this command show you the join date & account craete date')
            .addField('avatar', 'this send your avatar or others avatar')
            .setColor('#9542FF')

        const explain = new Discord.MessageEmbed()
            .setTitle('<:info:821779298952151050> commands info')
            .setDescription('here is all the commands aliases & useage & permissios')
            .addField('**ban**', 'How to use: `>ban @mention` | aliases: b | باند | permissions: `BAN_MEMBERS`')
            .addField('**kick**', 'How to use `>kick @mention`  |  aliases: k  |  permissions: `KICK_MEMBERS`')
            .addField('**mute**', 'How to use: `>mute @mention` and you can put a timer if you want | aliases: m | اص | permissions: `MOVE_MEMBERS`')
            .addField('**unmute**', 'How to use: `>unmute @mention` | aliases: un | تكلم | permissions: `MOVE_MEMBERS`')
            .addField('**unmute**', 'How to use: `>unmute @mention`  |  aliases: un | تكلم | permissions: `MOVE_MEMBERS`')
            .addField('**setnick**', 'How to use: `>setnick @mention new nickname` | aliases: set | nick | permissions: `MANAGE_NICKNAMES`')
            .addField('**move**', 'How to use: `>move @mention` | aliases: ve | سحب | permissions: `MOVE_MEMBERS`')
            .addField('**lock**', 'How to use: `>lock` | aliases: close | قفل | permissions: `MANAGE_CHANNELS`')
            .addField('**unlock**', 'How to use: `>unlock` | aliases: open | فتح | permissions: `MANAGE_CHANNELS`')
            .addField('**hide**', 'How to use: `>hide`', 'aliases: hi | permissions: `MANAGE_CHANNELS`')
            .addField('**show**', 'How to use: `>show` | aliases: sh | permissions: `MANAGE_CHANNELS`')
            .addField('**clear**', 'How to use: `>clear (number)` | aliases: cl | مسح | permissions: `MANAGE_MESSAGES`')
            .addField('**avatar**', 'How to use: `>avatar @mention` and if you want your avatar just write the command without `@mention` | aliases: v | pfp | صور | permissions: `none`')
            .addField('**user**', 'How to use: `>user @mention` write it without `@mention` to show your userinfo | aliases: u | permissions: `none`')
            .setColor('#E30B5C')
            .setFooter('Bot Developer Tanya#0762', 'https://cdn.discordapp.com/avatars/755767643331362916/a_e320b75321aad33243239820f4b92c97.gif?size=256&f=.gif')


        message.author.send(info);
        message.author.send(moderation);
        message.author.send(misc);
        message.author.send(explain);
    }
}
//https://cdn.discordapp.com/avatars/755767643331362916/a_e320b75321aad33243239820f4b92c97.gif?size=256&f=.gif 
//<a:srry:825769123686252545>
//<:info:821779298952151050>
//<:diamondingot:822225463010525224>