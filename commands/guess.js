const guildNumber = new Map();
const guildAttempts = new Map();
const Discord = require('discord.js');

function guildNumberMap(message) {
    const guildId = message.guild.id;

    var number = Math.floor(Math.random() * 150) + 1;
    // If there is no command running map for the guild, create one
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    // If there is no command running map for the guild, create one
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}

module.exports = {
    name: "guess",
    aliases: ['g', 'توقع'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: {
        usage: 'guesseasy <guesseasy number>',
        content: "Try and guess the number!",
    },
    async execute(client, message, args, Discord) {
        const { member, channel, guild } = message;
        
        const games = new Discord.MessageEmbed()
        .setDescription('You can only use this command in <#796211852920487987>')
        .setColor('#9D6D55')
        if (message.channel.id !== '796211852920487987') return message.channel.send(games)

        const provideaguess = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**<:NO:828567406347419669> Please pick a number**`)

        const pickinganumber = new Discord.MessageEmbed()
            .setColor('#33F304')
            .setDescription('**Picking a number between 1 and 150**')



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send(pickinganumber)
        } else if (!guess) {
            return channel.send(provideaguess);
        }

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new Discord.MessageEmbed()
                .setColor('#33F304')
                .setDescription(`<:success:821777867335008297> Correct <@${member.id}> The number was ${guildNumber.get(guild.id)}`)

            channel.send(guessedthenumber);
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);
            

            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply(`<:NO:828567406347419669> No ${guess} Is too low Try again`);
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply(`<:NO:828567406347419669> No ${guess} Is too high Try again`);
        } else {
            return message.reply("Please pick a real number between **1 - 150**");
        }
    },
};