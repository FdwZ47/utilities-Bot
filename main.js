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
const DIFF = 4255;//seconds 300 = 5m

client.on('message', async (message) => {
    if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
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
                message.reply('<a:animebonk:833775373908443206> السبام ممنوع في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 4000}))
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
                message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> DM me For more information`) .setColor('#845B83'));
                message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '<a:animebonk:833775373908443206> 1h Mute') .addField('**reason**', 'Spamming') .addField('Note', 'if you have a question about that feel free to DM a stuff member') .setColor('RANDOM'));
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
            if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
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
               message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> DM me For more information`) .setColor('#845B83'));
               message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '<a:animebonk:833775373908443206> 1h Mute') .addField('**reason**', 'invite link') .addField('Note', 'if you have a question about that feel free to DM a stuff member') .setColor('RANDOM')).catch(()=> {return});
               setTimeout(() => {
                   message.member.roles.remove(Tmuterole);
               }, MTIME);
            } 
        } 
       })


       client.on('message', async (message) =>{
        if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
    if (message.author.bot) return;
     const array = [' زق', 'يالكلب', 'يلعن', 'مخنث', 'سفلة', 'ملعون', 'fuke', 'bitch', 'poop', 'سحاقية', 'يالكلاب', 'سكس', 'كلتبن', 'كل تبن'];
     for (var i = 0; i < array.length; i++){
     if(message.content.includes(array[i])) {
         message.delete();
         message.reply('<a:animebonk:833775373908443206> السب و الكلمات المسيئة ممنوعة في السيرفر').then(msg => msg.delete({timeout: 4500}))
          
     } 
    }
     const link = ['https://', 'www.', '**https://**', '**www.**'];
     for (var i = 0; i < link.length; i++){
     if (message.content.includes(link[i])) {
             message.delete();
             message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل روابط بالشات هذا').then(msg => msg.delete({timeout: 4500}))
     }
    }
     const Bad = ['شرموطة', 'نيك امك', 'كس امك'];
     for (var i = 0; i < Bad.length; i++){
     if (message.content.includes(Bad[i])) {
        message.delete();
        const TTIME = 1800000;//1800 = 30m 
            let Mmuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
            message.member.roles.add(Mmuterole);
               message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Muted** **|** with ID \`${message.author.id}\`\n<@${message.author.id}> DM me For more information`) .setColor('#845B83'));
               message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '<a:animebonk:833775373908443206> 30m Mute') .addField('**reason**', 'Bad words') .addField('Note', 'if you have a question about that feel free to DM a stuff member') .setColor('RANDOM')).catch(()=> {return});
               setTimeout(() => {
                   message.member.roles.remove(Mmuterole);
               }, TTIME);
}
     }
   const Bademoji = ['💩', '🖕'];
   for (var i = 0; i < Bademoji.length; i++)
if (message.content.includes(Bademoji[i])) {
        message.delete();
        message.reply('<a:animebonk:833775373908443206> هذي الايموجيات ممنوعة في السيرفر').then(msg => msg.delete({timeout: 4500}))
     
    }
   
    })

    client.on('message', async (message) =>{

        if (message.content.startsWith('السلام عليكم')) {
            message.channel.send(`**و عليكم السلام منور  يا <@${message.author.id}> <a:ENJOY_44:786515261012181012>**`)
         
        } else if (message.content.startsWith('باك')) {
            message.channel.send(`**ولكم باك منور يا <@${message.author.id}> <a:ENJOY_95:790545328021045268> <a:ENJOY_95:790545328021045268> **`)
         
        } else if (message.content.startsWith('برب')) {
            message.channel.send(`**بالتوفيق يا بعد راسي <@${message.author.id}> عاد لا تطول**<a:ENJOY_183:805837612988104704>`)
         
        } else if (message.content.startsWith('**برب**')) {
            message.channel.send(`**بالتوفيق يا بعد راسي <@${message.author.id}> عاد لا تطول**<a:ENJOY_183:805837612988104704>`)
         
        } else if (message.content.startsWith('**السلام عليكم**')) {
            message.channel.send(`**و عليكم السلام منور  يا <@${message.author.id}> <a:ENJOY_44:786515261012181012>**`)
        
        } else if (message.content.startsWith('**باك**')) {
            message.channel.send(`**ولكم باك منور يا <@${message.author.id}> <a:ENJOY_95:790545328021045268> <a:ENJOY_95:790545328021045268> **`)
         
        }
    })

       
client.login(process.env.DISCORD_TOKEN);
