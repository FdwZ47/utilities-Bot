const Discord = require('discord.js');

module.exports = {
    name: 'reset',
    aliases: ['res'],
    permissions: ["MANAGE_NICKNAMES"],
    description: "this command change others nickname",
    async execute(client, message, args, Discord) {
        
        let user = message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

        if(!user) return message.channel.send("make sure to specific a user after the command")

        let member = message.guild.members.cache.get(user.id)
        await member.setNickname(null).catch(err =>message.channel.send({embed:{color:"RED",description:`error: ${err}`}}));
        let embed = new Discord.MessageEmbed()
        .setDescription(`nickname has been reset to ${user.tag}`)
        .setColor('#DDFAFF')

        message.channel.send(embed)

    }
}