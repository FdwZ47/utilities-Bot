const Discord = require('discord.js');
module.exports = {
    name: 'dm',
    aliases: [],
    permissions: [],
    description: "this command dm the member",
    async execute(client, message, args, Discord){
        if(message.author.id != 755767643331362916) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> For developer') .setDescription('only my developer can run this command') .setColor('#9542FF'));

        const user = 
        message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

      //  if(!user) return message.channel.send('please specific a user useing Mention or ID')

        const str = args.slice(1).join(" ");
   //     if(!str) return message.channel.send(new Discord.MessageEmbed() .setDescription('please input something to send it for this user') .setColor('RED'));
        if (message.content.includes("-a")) {
            user.send(str.replace("-a", ""));
        } else {
            user.send(`${str}`);
            message.delete();
        }
    },
};