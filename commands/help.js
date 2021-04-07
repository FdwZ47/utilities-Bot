//const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['helpme'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you all the bot commands",
    execute(client, message, args, Discord) {

        const info = new Discord.MessageEmbed()
        .setTitle('information')
        .addField('**prefix**', 'Bot prefix = `>`')
        .addField('**pages in this message**', '1-moderation cmds 2-misc 3-explain')
        .addField('**note**', 'use The arrows to look through The pages')
        .addfoter('Bot developer Tanya#0672')

        const moderation = new Discord.MessageEmbed()
        .setTitle('moderation cmds')
        .setDescription('All the commands below is only for Moderators (members have permissions to use the command)')
        .addField('ban', 'this banned the member')
        .addField('kick', 'this kick the member from the server')
        .addField('mute', 'this mute the member')
        .addField('unmute', 'this remove the mute from muted member')
        .addField('setnick', 'this command change the member nickname')
        .addField('move', 'this move the member to your voice channel')
        .addField('lock', 'this lock the text channel')
        .addField('unlock', 'this unlock the text channel')
        .addField('hide', 'this hide the channel so no one can see it')
        .addField('show', 'this show the channel so everyone can see it')
        .addField('clear', 'this delete the messages in text channel')

        const misc = new Discord.MessageEmbed()
        .setTitle('Misc cmds')
        .setDescription('All the commands Below everyone can use it')
        .addField('user', 'this command show you the join date & account craete date')
        .addField('')
    }
}