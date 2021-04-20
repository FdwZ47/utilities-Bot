const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


const usersMap = new Map();
const WARN = 4;
const LIMIT = 5;
const TIME = 3600000; //seconds 1h = 3600
const DIFF = 4250;//seconds 300 = 5m

client.on('message', async (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) return;
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
                message.reply('<a:bonkcat:833775309933117470> السبام ممنوع في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 4500}))
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
                message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> Check your DM For more information`) .setColor('#845B83'));
                message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '1h Mute') .addField('**reason**', 'Spamming') .addField('Note', 'if you want to ask about that feel free to DM a stuff member') .setColor('RANDOM'));
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

       client.on('message', async (message) =>{
        const isInvite = (guild, code) => new Promise((resolve) =>{
            guild.fetchInvites().then((invites) => {
                resolve(invites.some((value) => value[0] === code))
            })
        }); 
 
        const code = message.content.split('discord.gg/')[1];
        if (message.content.includes('discord.gg/')) {
            if (message.member.hasPermission('ADMINISTRATOR')) return;
            const isOurInvite = await isInvite(message.guild, code);
            if(!isOurInvite) {
                message.delete().catch(error => {
                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                const MTIME = 3600000; 
            let Tmuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
            message.member.roles.add(Tmuterole);
               message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> Check your DM For more information`) .setColor('#845B83'));
               message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '1h Mute') .addField('**reason**', 'invite link') .addField('Note', 'if you want to ask about that feel free to DM a stuff member') .setColor('RANDOM')).catch(()=> {return});
               setTimeout(() => {
                   message.member.roles.remove(Tmuterole);
               }, MTIME);
            } 
        } 
       })

        const usersValidURLMap = new Map();

       client.on('message', async (message) =>{
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        if (message.content.includes('https://')) {
            message.delete();
            message.reply('<a:bonkcat:833775309933117470> مو مسموح لك ترسل روابط بالشات هذا').then(msg => msg.delete({timeout: 4500}))
          
        } else if (message.content.includes('www.')) {
            message.delete();
            message.reply('<a:bonkcat:833775309933117470> مو مسموح لك ترسل روابط بالشات هذا').then(msg => msg.delete({timeout: 4500}))
          
         } else if (message.content.includes('زق')) {
             message.delete();
             message.reply('<a:bonkcat:833775309933117470> السب و الكلمات المسيئة ممنوعة في السيرفر').then(msg => msg.delete({timeout: 4500}))
          
         } else if (message.content.includes('كس امك')) {
             message.delete();
             const TTIME = 1800000;//1800 = 30m 
            let Mmuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
            message.member.roles.add(Mmuterole);
               message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> Check your DM For more information`) .setColor('#845B83'));
               message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '30m Mute') .addField('**reason**', 'Bad words') .addField('Note', 'if you want to ask about that feel free to DM a stuff member') .setColor('RANDOM')).catch(()=> {return});
               setTimeout(() => {
                   message.member.roles.remove(Mmuterole);
               }, TTIME);
          
         } else if (message.content.includes('خرا')) {
             message.delete();
             message.reply('<a:bonkcat:833775309933117470> السب و الكلمات المسيئة ممنوعة في السيرفر').then(msg => msg.delete({timeout: 4500}))
          
         } else if (message.content.includes('نيك امك')) {
             message.delete();
             const STIME = 1800000;//1800 = 30m 
            let Smuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
            message.member.roles.add(Smuterole);
               message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> Check your DM For more information`) .setColor('#845B83'));
               message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '30m Mute') .addField('**reason**', 'Bad words') .addField('Note', 'if you want to ask about that feel free to DM a stuff member') .setColor('RANDOM')).catch(()=> {return});
               setTimeout(() => {
                   message.member.roles.remove(Smuterole);
               }, STIME);
          
         } else if (message.content.includes('يالكلب')) {
             message.delete();
             message.reply('<a:bonkcat:833775309933117470> السب و الكلمات المسيئة ممنوعة في السيرفر').then(msg => msg.delete({timeout: 4500}))
          
         } 
    })

       
client.login(process.env.DISCORD_TOKEN);
