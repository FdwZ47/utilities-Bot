const Discord = require('discord.js');
module.exports = {
    name: 'role',
    aliases: ['r'],
    permissions: ["MANAGE_ROLES"],
    description: "this command give a role to the member!",
    execute(client, message, args, Discord){
        
         const Target = message.mentions.users.first(); //||
        // message.guild.members.cache.get(args[0])?.user;

       if(!Target) return;

       args.shift()

       const rolename = args.join(' ')
       const guild = message

       const role = guild.roles.cache.find((role) => {
           return role.name === rolename
       })
        const member = guild.members.cache.get(Target.id)
        if (!member.roles.cache.get(role.id)) {
            member.roles.add(role)
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${Target.id}>, +${rolename} `) .setColor('RANDOM'));
        
        }
        // member.roles.add(role)
        // message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${Target.id}>, +${rolename} `) .setColor('RANDOM'));
        
        if (member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${Target.id}>, -${rolename} `) .setColor('RANDOM'));
        
        }
    },
}