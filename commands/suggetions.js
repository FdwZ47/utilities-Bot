module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'اقتراح'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, client) {
        const channel = message.guild.channel.cache.find(c => c.name === '「📨」suggest');
        if (!channel) return message.channel.send('there is no suggestion channel');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('#00CFC9')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}