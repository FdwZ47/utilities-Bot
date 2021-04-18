const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: [ "MESSAGE", "CHANNEL", "REACTION" ]});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get('806447826548162580').send(`**هلا والله نورت سيرفر ENJOY <a:ENJOY_190:808366642634817617>**\n**لا تنسى تشيك القوانين <#768680803940040725> و شرح السيرفر <#772065150957125642> قبل كل حاجة <a:ENJOY_44:786515261012181012>**\n<@${guildMember.user.id}>`)
})


// const welcome = require('./welcome')


// welcome(client)


client.login(process.env.DISCORD_TOKEN);
