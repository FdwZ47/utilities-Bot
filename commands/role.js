const Discord = require('discord.js');
module.exports = {
    name: 'role',
    aliases: ['r'],
    permissions: ["MANAGE_ROLES"],
    description: "this command give a role to the member!",
    execute(client, message, args, Discord){
        
        const targetUser = message.mentions.users.first()
    if (!targetUser) {
      return
    }

    args.shift()

    const roleName = args.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      return
    }

    const member = guild.members.cache.get(targetUser.id)
    // member.roles.add(role)
    // message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${targetUser.id}>, +${roleName}`) .setColor('RANDOM'));

    if (!member.roles.cache.get(role.id)) {
        member.roles.add(role)

    message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${targetUser.id}>, +${roleName}`) .setColor('RANDOM'));

      } else if (member.roles.cache.get(role.id)) {
        member.roles.remove(role)

    message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${targetUser.id}>, -${roleName}`) .setColor('RANDOM'));

      }
    },
}