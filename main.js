const Discord = require('discord.js');
const Fs = require('fs');
const ms = require('ms');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const autoMod = require('./auto-mod');
const response = require('./response');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


const commandFolders = Fs.readdirSync('./commands');


for (const folder of commandFolders) {
    const commandFiles = Fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

autoMod(client);
response(client);



const usersMap = new Map();
const WARN = 4;
const LIMIT = 5;
const TIME = 3600000;
const DIFF = 4555;

client.on('message', async (message) => {
    if (message.channel.id == '796211852920487987') return;
    if (message.channel.id == '811248797669392385') return;
    if (message.channel.type === 'dm') return;
    if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;
    if (message.author.bot) return;
    if (usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if (difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if (parseInt(msgCount) === WARN) {
                message.delete();
                message.reply('السبام ممنوع في السيرفر تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 3500 }))
            }
            if (parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
                if (!muterole) {
                    try {
                        muterole = await message.guild.roles.create({
                            name: "T!MUTED",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                            })
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
                message.delete();
                message.member.roles.add(muterole);
                message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``).setColor('#E3A781'));
                message.author.send(new Discord.MessageEmbed().setTitle('**moderation mail**').setDescription('you have been muted so you can not send messages in the server').addField('**action**', '<a:animebonk:833775373908443206> 1h mute').addField('**reason**', 'Spamming').setColor('RANDOM'));
                setTimeout(() => {
                    message.member.roles.remove(muterole);

                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: fn
        });
    }
})

const usersinviteMap = new Map();

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    const isInvite = (guild, code) => new Promise((resolve) => {
        guild.fetchInvites().then((invites) => {
            resolve(invites.some((value) => value[0] === code))
        })
    });

    const code = message.content.split('discord.gg/')[1];
    if (message.content.includes('discord.gg/')) {
        if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
        const isOurInvite = await isInvite(message.guild, code);
        if (!isOurInvite) {
            message.delete().catch(error => {
                if (error.code !== 10008) {
                    console.error('failed to delete the message', error);
                }
            });
            const MTIME = 3600000;
            let Tmuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
            message.member.roles.add(Tmuterole);
            message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``).setColor('#E3A781'));
            message.author.send(new Discord.MessageEmbed().setTitle('**moderation mail**').setDescription('you have been muted so you can not send messages in the server').addField('**action**', '<a:animebonk:833775373908443206> 1h Mute').addField('**reason**', 'invite link').setColor('RANDOM')).catch(() => { return });
            setTimeout(() => {
                message.member.roles.remove(Tmuterole);
            }, MTIME);
        }
    }
})


// client.on('message', async (message) =>{
//     if(message.content === '>join') {
//         client.emit('guildMember', message.member)
//     }
// })



client.login(process.env.DISCORD_TOKEN);

