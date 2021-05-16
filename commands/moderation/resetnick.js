const Discord = require('discord.js');

module.exports = {
    name: 'reset',
    aliases: ['res'],
    permissions: ["MANAGE_NICKNAMES"],
    description: "this command change others nickname",
    async execute(client, message, args, Discord) {
        
        let user = message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

        if(!user) return; // message.channel.send("make sure to specific a user after the command")

        let member = message.guild.members.cache.get(user.id)
        await member.setNickname(null).catch(err =>message.channel.send({embed:{color:"RED",description:`error: ${err}`}}));
       

        message.channel.send(`nickname has been reset to \`${user.tag}\``)
        message.delete().catch(error => {
            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });

    }
}