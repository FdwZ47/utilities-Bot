const Discord = require('discord.js');
const Fs = require('fs');
const ms = require('ms');
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
const DIFF = 4555;//seconds 300 = 5m

client.on('message', async (message) => {
    if (message.channel.id == '796211852920487987') return;
    if (message.channel.id == '811248797669392385') return;
    if (message.channel.type === 'dm') return;
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
                message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``) .setColor('#E3A781'));
                message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '<a:animebonk:833775373908443206> 1h mute') .addField('**reason**', 'Spamming') .setColor('RANDOM'));
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
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
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
               message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``) .setColor('#E3A781'));
               message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted so you can not send messages in the server') .addField('**action**', '<a:animebonk:833775373908443206> 1h Mute') .addField('**reason**', 'invite link') .setColor('RANDOM')).catch(()=> {return});
               setTimeout(() => {
                   message.member.roles.remove(Tmuterole);
               }, MTIME);
            } 
        } 
       })


       client.on('message', async (message) =>{
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
       if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
    if (message.author.bot) return;
     const array = [' زق', 'يالكلب', 'مخنث', 'سفلة', 'ملعون', 'fuke', 'bitch', 'سحاقية', 'يالكلاب', 'كلتبن', 'كل تبن', 'قحبة', 'Fuke', 'ز.ق'];
     for (var i = 0; i < array.length; i++){
     if(message.content.includes(array[i])) {
         message.delete().catch(error => {
            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
         message.reply('<a:animebonk:833775373908443206> السب و الكلمات المسيئة ممنوعة في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 3500}))
          
         var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
         if(!warnsJSON[message.author.id]) {
             warnsJSON[message.author.id] = {
                 warns: 0
             }
     
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }
     
         warnsJSON[message.author.id].warns += 1
         Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
     
     
         setTimeout(function() {
     
             warnsJSON[message.author.id].warns -= 1
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }, ms('30m'))
     
        //  var warnEm = new Discord.MessageEmbed()
        //  .setColor('BLUE')
        //  .setTitle('moderation mail')
        //  .setDescription('You have recieved a warning Continuing will result in a mute')
        //  .addField('Reason' , 'bad words')
     
        //  try {
        //      message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000})) 
     
        //  } catch(err) {
     
        //  }
     
     
             if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
             var mutedEm = new Discord.MessageEmbed()
             .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
             .setColor('#E3A781')
             message.channel.send(mutedEm)
     
             const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
             const user = message.member
             user.roles.add(muteRole.id)
     
             var yougotmuted = new Discord.MessageEmbed()
             .setTitle('moderation mail') 
             .setDescription('you have been muted for continuous **|** so you cant send messages in the server') 
             .addField('action', '<a:animebonk:833775373908443206> 30m mute') 
             .addField('reason', 'Bad words') 
             .setColor('RANDOM')
     
             try {
     
                 message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000}))
     
             }catch(err) {
     
             }
     
             setTimeout(function () {
                 user.roles.remove(muteRole.id)
             }, ms('30m'));
     
         }
         return;
     }
    } 
// EMBED_LINKS
    function isValidURL(string) {
        if (message.member && message.member.hasPermission('EMBED_LINKS')) return;
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        if (message.content.includes('discord.gg/')) return;

        return (res !== null)


      };

      var testContent = `${message.content}`;

     if(isValidURL(testContent)) {
 
  
        message.delete().catch(error => {
            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
         message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل روابط بالشات هذا, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 4000}))


         var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
         if(!warnsJSON[message.author.id]) {
             warnsJSON[message.author.id] = {
                 warns: 0
             }
     
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }
     
         warnsJSON[message.author.id].warns += 1
         Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
     
     
         setTimeout(function() {
     
             warnsJSON[message.author.id].warns -= 1
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }, ms('30m'))
     
        //  var warnEm = new Discord.MessageEmbed()
        //  .setColor('BLUE')
        //  .setTitle('moderation mail')
        //  .setDescription('You have recieved a warning Continuing will result in a mute')
        //  .addField('Reason' , 'links')
     
        //  try {
        //      message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000})) 
     
        //  } catch(err) {
     
        //  }
     
     
             if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
             var mutedEm = new Discord.MessageEmbed()
             .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
             .setColor('#E3A781')
             message.channel.send(mutedEm)
     
             const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
             const user = message.member
             user.roles.add(muteRole.id)
     
             var yougotmuted = new Discord.MessageEmbed()
             .setTitle('moderation mail') 
             .setDescription('you have been muted for continuous **|** so you cant send messages in the server') 
             .addField('**action**', '<a:animebonk:833775373908443206> 30m mute') 
             .addField('**reason**', 'links') 
             .setColor('RANDOM')
     
             try {
     
                 message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000}))
     
             }catch(err) {
     
             }
     
             setTimeout(function () {
                 user.roles.remove(muteRole.id)
             }, ms('30m'));
     
         }
         return;
     }

     try {
 
        var linneArray = message.content.match(/\n/g)

        var number = linneArray.length
        if(number >= 85){
            message.delete().catch(error => {
                if (error.code !== 10008) {
                    console.error('failed to delete the message', error);
                }
            });
            message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل رسايل طويلة و مزعجة في الشات هذا, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 4000}))

            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
         if(!warnsJSON[message.author.id]) {
             warnsJSON[message.author.id] = {
                 warns: 0
             }
     
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }
     
         warnsJSON[message.author.id].warns += 1
         Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
     
     
         setTimeout(function() {
     
             warnsJSON[message.author.id].warns -= 1
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }, ms('30m'))
     
        //  var warnEm = new Discord.MessageEmbed()
        //  .setColor('BLUE')
        //  .setTitle('moderation mail')
        //  .setDescription('You have recieved a warning Continuing will result in a mute')
        //  .addField('Reason' , 'long messages')
     
        //  try {
        //      message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000})) 
     
        //  } catch(err) {
     
        //  }
     
     
             if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
             var mutedEm = new Discord.MessageEmbed()
             .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
             .setColor('#E3A781')
             message.channel.send(mutedEm)
     
             const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
             const user = message.member
             user.roles.add(muteRole.id)
     
             var yougotmuted = new Discord.MessageEmbed()
             .setTitle('moderation mail') 
             .setDescription('you have been muted for continuous **|** so you cant send messages in the server') 
             .addField('**action**', '<a:animebonk:833775373908443206> 30m mute') 
             .addField('**reason**', 'long messages') 
             .setColor('RANDOM')
     
             try {
     
                 message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000}))
     
             }catch(err) {
     
             }
     
             setTimeout(function () {
                 user.roles.remove(muteRole.id)
             }, ms('30m'));
     
         }
       return;
        }
     }catch(err) {

     }

     if (message.content.length >= 725) {


        message.delete().catch(error => {
            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
         message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل رسايل طويلة و مزعجة في الشات هذا, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 4250}))


         var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
         if(!warnsJSON[message.author.id]) {
             warnsJSON[message.author.id] = {
                 warns: 0
             }
     
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }
     
         warnsJSON[message.author.id].warns += 1
         Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
     
     
         setTimeout(function() {
     
             warnsJSON[message.author.id].warns -= 1
             Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
         }, ms('30m'))
     
        //  var warnEm = new Discord.MessageEmbed()
        //  .setColor('BLUE')
        //  .setTitle(`You have been warned`)
        //  .setDescription('You have recieved a warning Continuing will result in a mute')
        //  .addField('Reason' , 'long messages')
         
     
        //  try {
        //      message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000})) 
     
        //  } catch(err) {
     
        //  }
     
     
             if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
             var mutedEm = new Discord.MessageEmbed()
             .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
             .setColor('#E3A781')
             message.channel.send(mutedEm)
     
             const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
             const user = message.member
             user.roles.add(muteRole.id)
     
             var yougotmuted = new Discord.MessageEmbed()
             .setTitle('**moderation mail**') 
             .setDescription('you have been muted for continuous **|** so you cant send messages in the server') 
             .addField('**action**', '<a:animebonk:833775373908443206> 30m mute') 
             .addField('**reason**', 'long messages') 
             .setColor('RANDOM')
     
             try {
     
                 message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000}))
     
             }catch(err) {
     
             }
     
             setTimeout(function () {
                 user.roles.remove(muteRole.id)
             }, ms('30m'));
     
         }

         return;
     };


     if(message.mentions.users.size >= 13) {
         message.delete().catch(error => {

            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
        message.reply('<a:animebonk:833775373908443206> مو مسموح لك تمنشن كثير اشخاص في نفس الرسالة, تكمل تاخذ ميوت')


        var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
        if(!warnsJSON[message.author.id]) {
            warnsJSON[message.author.id] = {
                warns: 0
            }
    
            Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
        }
    
        warnsJSON[message.author.id].warns += 1
        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    
    
        setTimeout(function() {
    
            warnsJSON[message.author.id].warns -= 1
            Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
        }, ms('30m'))
    
        // var warnEm = new Discord.MessageEmbed()
        // .setColor('BLUE')
        // .setTitle(`You have been warned`)
        // .setDescription('You have recieved a warning Continuing will result in a mute')
        // .addField('Reason' , 'mass mention')
    
        // try {
        //     message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000})) 
    
        // } catch(err) {
    
        // }
    
    
            if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
            var mutedEm = new Discord.MessageEmbed()
            .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
            .setColor('#E3A781')
            message.channel.send(mutedEm)
    
            const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
            const user = message.member
            user.roles.add(muteRole.id)
    
            var yougotmuted = new Discord.MessageEmbed()
            .setTitle('**moderation mail**') 
            .setDescription('you have been muted for continuous **|** so you cant send messages in the server') 
            .addField('**action**', '<a:animebonk:833775373908443206> 30m Mute') 
            .addField('**reason**', 'mass mention') 
            .setColor('RANDOM')
    
            try {
    
                message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000}))
    
            }catch(err) {
    
            }
    
            setTimeout(function () {
                user.roles.remove(muteRole.id)
            }, ms('30m'));
    
        }
        return;
     }
  

   const Bademoji = ['💩', '🖕'];

   for (var i = 0; i < Bademoji.length; i++)

if (message.content.includes(Bademoji[i])) {

        message.delete().catch(error => {

            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
        message.reply('<a:animebonk:833775373908443206> هذي الايموجيات ممنوعة في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 3000}))
     

        var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
    if(!warnsJSON[message.author.id]) {
        warnsJSON[message.author.id] = {
            warns: 0
        }

        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    }

    warnsJSON[message.author.id].warns += 1
    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


    setTimeout(function() {

        warnsJSON[message.author.id].warns -= 1
        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    }, ms('30m'))

    // var warnEm = new Discord.MessageEmbed()
    // .setColor('BLUE')
    // .setTitle(`You have been warned`)
    // .setDescription('You have recieved a warning Continuing will result in a mute')
    // .addField('Reason' , 'Bad emojis')

    // try {
    //     message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000})) 

    // } catch(err) {

    // }


        if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
        var mutedEm = new Discord.MessageEmbed()
        .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
        .setColor('#E3A781')
        message.channel.send(mutedEm)

        const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
        const user = message.member
        user.roles.add(muteRole.id)

        var yougotmuted = new Discord.MessageEmbed()
        .setTitle('**moderation mail**') 
        .setDescription('you have been muted for continuous infractions **|** so you cant send messages in the server') 
        .addField('**action**', '<a:animebonk:833775373908443206> 30m mute') 
        .addField('**reason**', 'Bad emojis') 
        .setColor('RANDOM')

        try {

            message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000}))

        }catch(err) {

        }

        setTimeout(function () {
            user.roles.remove(muteRole.id)
        }, ms('30m'));

    }
    return;

    }


    const not = ['باعوص', '**باعوص**'];


    for (var i = 0; i < not.length; i++)



    if (message.content.includes(not[i])) {
        message.delete().catch(error => {


            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
        message.reply('<a:animebonk:833775373908443206> الكلمات هذي ممنوعة في السيرفر').then(msg => msg.delete({timeout: 3500}))
     
    }

    const anime = ['ميكاسا بتقطع راس ايرين', '**ميكاسا بتقطع راس ايرين**'];


   for (var i = 0; i < anime.length; i++)


if (message.content.includes(anime[i])) {


        message.delete().catch(error => {


            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
        message.reply('<a:animebonk:833775373908443206> الحرق ممنوع في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 3000}))
     
    

    var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            
 
    if(!warnsJSON[message.author.id]) {
        warnsJSON[message.author.id] = {
            warns: 0
        }

        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    }

    warnsJSON[message.author.id].warns += 1
    Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


    setTimeout(function() {

        warnsJSON[message.author.id].warns -= 1
        Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
    }, ms('30m'))

    // var warnEm = new Discord.MessageEmbed()
    // .setColor('BLUE')
    // .setTitle(`You have been warned`)
    // .setDescription('You have recieved a warning Continuing will result in a mute')
    // .addField('Reason' , 'حرق انمي')

    // try {
    //     message.author.send(warnEm).then(msg => msg.delete({timeout: 1800000}))

    // } catch(err) {

    // }


    if(Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
        var mutedEm = new Discord.MessageEmbed()
        .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``)
        .setColor('#E3A781')
        message.channel.send(mutedEm)

        const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
        const user = message.member
        user.roles.add(muteRole.id)

        var yougotmuted = new Discord.MessageEmbed()
        .setTitle('**moderation mail**') 
        .setDescription('you have been muted for continuous **|** so you can not send messages in the server') 
        .addField('**action**', '<a:animebonk:833775373908443206> 30m mute') 
        .addField('**reason**', 'حرق انمي') 
        .setColor('RANDOM')

        try {

            message.author.send(yougotmuted).then(msg => msg.delete({timeout: 1800000})) 

        }catch(err) {

        }

        setTimeout(function () {
            user.roles.remove(muteRole.id)
        }, ms('30m'));
    }

   return;
       }



    })

    client.on('message', async (message) =>{
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
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
         
        } else if (message.content.startsWith('زق')) {
            if (message.author.bot) return;
            if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
            message.delete();
            message.reply('<a:animebonk:833775373908443206> السب و الكلمات المسيئة ممنوعة في السيرفر').then(msg => msg.delete({timeout: 3000}))
         
        } else if (message.content.startsWith('سلام عليكم')) {
            message.channel.send(`**و عليكم السلام منور  يا <@${message.author.id}> <a:ENJOY_44:786515261012181012>**`)
        
        } 
    })

    client.on('message', async (message) =>{
        if (message.channel.id == '796211852920487987') return;
        if (message.channel.id == '811248797669392385') return;
        if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
        if (message.author.bot) return;
        const amount = 4;
        let filter = msg => {
            return msg.content.toLowerCase() == message.content.toLowerCase() &&
            msg.author.id == message.author.id;
        }

        message.channel.awaitMessages(filter, { max: 2, time: 15000, errors: ["time"]}).then(collected => {
            if (message.content.toLowerCase() == message.content.toLowerCase()){
            message.reply('<a:animebonk:833775373908443206> تكرار الرسايل ممنوع في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({timeout: 3500}))
            }
        }).catch(collected => { console.log('time up')});

    
// 180000
        message.channel.awaitMessages(filter, { max: 3, time: 15000, errors: ["time"]}).then(collected => {
            if (message.content.toLowerCase() == message.content.toLowerCase()){
                message.delete().catch(error => {
                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                const RTIME = 1800000; 
                let Rmuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
                message.member.roles.add(Rmuterole);
                   message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **muted** **|** with id \`${message.author.id}\``) .setColor('#E3A781'));
                   message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been muted for continuous **|** so you can not send messages in the server') .addField('**action**', '<a:animebonk:833775373908443206> 30m Mute') .addField('**reason**', 'spam') .setColor('RANDOM')).catch(()=> {return});
                   setTimeout(() => {
                       message.member.roles.remove(Rmuterole);
                   }, RTIME);
            }
        }).catch(collected => { console.log('time up')});
    });


   

    client.on('message', async (message) =>{

        const Bad = ['شرموطة', 'نيك امك', 'كس امك', 'كسمك', 'كس امكم', 'كس خواتكم', 'قحاب', 'منايك', 'انـيـك امـك', 'كـ.ـس...اخــتك', 'ينيك'];


        for (var i = 0; i < Bad.length; i++){
   
   
        if (message.content.includes(Bad[i])) {
   
           message.delete();
           message.member.ban();
        
   
                   message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${message.author.id}> has been **Banned** **|** with ID \`${message.author.id}\``) .setColor('#64657C'));
                   message.author.send(new Discord.MessageEmbed() .setTitle('**moderation mail**') .setDescription('you have been Banned from the server') .addField('**action**', '<a:animebonk:833775373908443206> banned') .addField('**reason**', 'Bad words') .setColor('RANDOM')).catch(()=> {return});
      
   
   }
   
   
        }
    })




       
client.login(process.env.DISCORD_TOKEN);


// \n<@${message.author.id}> DM me For more information