const Discord = require('discord.js');

module.exports = {
    name: 'setnick',
    aliases: ['nick', 'set'],
    permissions: ["MANAGE_NICKNAMES"],
    description: "this command change others nickname",
    async execute(client, message, args, Discord) {
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//        let user = message.mentions.users.first() ||
  //      message.guild.members.cache.get(args[0])?.user;

        if(!user) return message.channel.send("make sure to mention a user after the command")

        let nick = args.slice(1).join(" ") 
        if(!nick) return message.channel.send("please input a nickname")

        let member = message.guild.members.cache.get(user.id)
        await member.setNickname(nick).catch(err =>message.channel.send({embed:{color:"RED",description:`error: ${err}`}}));
        let embed = new Discord.MessageEmbed()
        .setDescription(`<a:yes_1:823243336664088616> ${user.tag}'s nickname has been changed to ${nick}`)
        .setColor('#DDFAFF')

        message.channel.send(embed)

    }
}