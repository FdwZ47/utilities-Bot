const Discord = require('discord.js');

module.exports = {
    name: 'vote',
    aliases: [],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "vote command",
    execute(client, message, args, Discord) {

        const bot = new Discord.MessageEmbed()
        .setDescription('You can only use this command in <#798664931359719485>')
        .setColor('#9D6D55')
        if (message.channel.id !== '798664931359719485'){ 
            message.delete();
            return message.channel.send(bot).then(msg => msg.delete({timeout: 5000}))
    }
    

    const vote = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`)
    .setDescription(' You can support the server by voting for us on [top.gg](https://top.gg/servers/768675517955309599)')
    .setColor('RANDOM')

    message.channel.send(vote);
     }
}
// , '840659776098009110'