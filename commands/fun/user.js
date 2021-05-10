const Discord = require('discord.js');

const moment = require('moment');

module.exports = {
    name: 'user',
    aliases: ['u', 'info'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you your user info",
    execute(client, message, args, Discord) {

      const bot = new Discord.MessageEmbed()
      .setDescription('You can only use this command in <#798664931359719485>')
      .setColor('#9D6D55')
      if (message.channel.id !== '798664931359719485') return message.channel.send(bot).then(msg => msg.delete({timeout: 5000}))

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

        const joineddate = moment.utc(member.joinedAt).format('L');
        let status = member.presence.status;

        const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
        .setColor(member.displayHexColor)
       // .addField("Member ID", member.id)
        //.addField('Roles', `<@&${member._roles.join('> <@&')}>`)
        .addField("Account Created On:", `\`${moment.utc(member.user.createdAt).format('L')}\``, true)
        .addField('Joined At:', `\`${joineddate}\``) 
        .addField('avatar URL:', `[link](${member.user.displayAvatarURL()})`)
      //  .addField('ID:', `${member.id}`, false)
        //.setFooter(`ID: ${member.id}`, '\n200b')

        message.channel.send(userEmbed);
    }
}
// "MMMM Do YYYY"
// "MMMM Do YYYY"
// member.user.displayAvatarURL()
// \n> Before **${joined}** day's Ago