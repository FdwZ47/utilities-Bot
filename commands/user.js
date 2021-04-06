const Discord = require('discord.js');

const moment = require('moment');

module.exports = {
    name: 'user',
    aliases: ['u', 'info'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you your user info",
    execute(client, message, args, Discord) {
        if (message.channel.id !== '798664931359719485') return;
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

        if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if (member.presence.status === 'online') member.presence.status = 'Online';
        if (member.presence.status === 'idle') member.presence.status = 'Idle';
        if (member.presence.status === 'offline') member.presence.status = 'offline';

        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);

        const joineddate = moment.utc(member.joinedAt).format("MMMM Do YYYY");
        let status = member.presence.status;

        const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setColor('#0097FF')
        .addField("Member ID", member.id)
        //.addField('Roles', `<@&${member._roles.join('> <@&')}>`)
        .addField("<:blue_point:821782715925921794> Account Created On:", ` ${moment.utc(member.user.createdAt).format("MMMM Do YYYY")}`, true)
        .addField('<:blue_point:821782715925921794> Joined the server At:', `${joineddate} \n> Before **${joined}** day's Ago`) 
        .setFooter('Developer Tanya#0762', 'https://media.discordapp.net/attachments/827127242005020702/828506152005926952/94970e47ebef1e067ba91b37694eeb36.gif')

        message.channel.send(userEmbed);
    }
}