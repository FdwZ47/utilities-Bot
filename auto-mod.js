const Discord = require('discord.js');
const Fs = require('fs');
const ms = require('ms');
module.exports = (client) => {
    client.on('message', async (message) => {
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
     

        //   const array = ["test"];
        const array = ['زق', 'يالكلب', 'مخنث', 'سفلة', 'ملعون', 'fuck', 'bitch', 'سحاقية', 'يالكلاب', 'قحبة', 'ز.ق', 'خرا', 'خرة', 'خره'];
        // for (var)
       
        for (var i = 0; i < array.length; i++) {
           // if(array.some(w => `${message.content.toLowerCase()}` === (`${w}`))[i]){
        //    if (message.content.toLowerCase() === array[i]) {
            const msgs = message.content.split(' ')

            let found = false;

            await Promise.all(
                msgs.map((content) => {
                    if(array.includes(content.toLowerCase())) found = true;
                })
            )

            
            if (found) {

               
                var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


                if (!warnsJSON[message.author.id]) {
                    warnsJSON[message.author.id] = {
                        warns: 0
                    }

                    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
                }

                warnsJSON[message.author.id].warns += 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


                setTimeout(function () {

                    warnsJSON[message.author.id].warns -= 1
                    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
                }, ms('30m'))



                if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {

                    
                    message.delete().catch(error => {
                        if (error.code !== 10008) {
                            console.error('failed to delete the message', error);
                        }
                    });
                    var mutedEm = new Discord.MessageEmbed()
                        .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
                        .setColor('#E3A781')
                    message.channel.send(mutedEm)

                    const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
                    const user = message.member
                    user.roles.add(muteRole.id)

                    var yougotmuted = new Discord.MessageEmbed()
                        .setTitle('moderation mail')
                        .setDescription('you have been muted **|** so you cant send messages in the server')
                        .addField('action', '30m mute')
                        .addField('reason', 'Bad words')
                        .setColor('RANDOM')

                    try {

                        message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                    } catch (err) {

                    }

                    setTimeout(function () {
                        user.roles.remove(muteRole.id)
                    }, ms('30m'));

                } else {
                    message.delete().catch(error => {
                        if (error.code !== 10008) {
                            console.error('failed to delete the message', error);
                        }
                    });

                    message.reply('السب و الكلمات المسيئة ممنوعة في السيرفر تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

                }
                return;
            }
        } 

        const Bademoji = ['💩', '🖕'];

        for (var i = 0; i < Bademoji.length; i++)

            if (message.content.includes(Bademoji[i])) {

                var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


                if (!warnsJSON[message.author.id]) {
                    warnsJSON[message.author.id] = {
                        warns: 0
                    }

                    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
                }

                warnsJSON[message.author.id].warns += 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


                setTimeout(function () {

                    warnsJSON[message.author.id].warns -= 1
                    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
                }, ms('30m'))


                if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
                    message.delete().catch(error => {
                        if (error.code !== 10008) {
                            console.error('failed to delete the message', error);
                        }
                    });
                    var mutedEm = new Discord.MessageEmbed()
                        .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
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

                        message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                    } catch (err) {

                    }

                    setTimeout(function () {
                        user.roles.remove(muteRole.id)
                    }, ms('30m'));

                } else {
                    message.delete().catch(error => {

                        if (error.code !== 10008) {
                            console.error('failed to delete the message', error);
                        }
                    });
                    message.reply('هذي الايموجيات ممنوعة في السيرفر تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

                }
                return;

            }





        function isValidURL(string) {
            if (message.member && message.member.hasPermission('EMBED_LINKS')) return;
            if (message.channel.id == '842415158261448724') return;
            var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

            if (message.content.includes('discord.gg/')) return;

            return (res !== null)


        };

        var testContent = `${message.content}`;

        if (isValidURL(testContent)) {

            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


            if (!warnsJSON[message.author.id]) {
                warnsJSON[message.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }

            warnsJSON[message.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


            setTimeout(function () {

                warnsJSON[message.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }, ms('30m'))


            if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
                message.delete().catch(error => {
                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                var mutedEm = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
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

                    message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                } catch (err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('30m'));

            } else {

                message.delete().catch(error => {
                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                message.reply('مو مسموح لك ترسل روابط بالشات هذا تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

            }
            return;
        }





        if (message.content.length >= 725) {
           
            if (message.channel.id == '847419868726820874') return;
            if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;


            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


            if (!warnsJSON[message.author.id]) {
                warnsJSON[message.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }

            warnsJSON[message.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


            setTimeout(function () {

                warnsJSON[message.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }, ms('30m'))

            if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
                message.delete().catch(error => {
                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                var mutedEm = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
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

                    message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                } catch (err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('30m'));

            } else {
                message.delete().catch(error => {
                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                message.reply('مو مسموح لك ترسل رسايل طويلة و مزعجة في الشات هذا تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

            }

            return;
        };

        try {

            var linneArray = message.content.match(/\n/g)

            var number = linneArray.length
            if (number >= 85) {
                if (message.channel.id == '847419868726820874') return;
                if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;

                var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


                if (!warnsJSON[message.author.id]) {
                    warnsJSON[message.author.id] = {
                        warns: 0
                    }

                    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
                }

                warnsJSON[message.author.id].warns += 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


                setTimeout(function () {

                    warnsJSON[message.author.id].warns -= 1
                    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
                }, ms('30m'))




                if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
                    message.delete().catch(error => {
                        if (error.code !== 10008) {
                            console.error('failed to delete the message', error);
                        }
                    });
                    var mutedEm = new Discord.MessageEmbed()
                        .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
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

                        message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                    } catch (err) {

                    }

                    setTimeout(function () {
                        user.roles.remove(muteRole.id)
                    }, ms('30m'));

                } else {
                    message.delete().catch(error => {
                        if (error.code !== 10008) {
                            console.error('failed to delete the message', error);
                        }
                    });
                    message.reply('مو مسموح لك ترسل رسايل طويلة و مزعجة في الشات هذا تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

                }
                return;
            }
        } catch (err) {

        }




        if (message.mentions.users.size >= 13) {
            if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;


            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


            if (!warnsJSON[message.author.id]) {
                warnsJSON[message.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }

            warnsJSON[message.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


            setTimeout(function () {

                warnsJSON[message.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }, ms('30m'))


            if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
                message.delete().catch(error => {

                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                var mutedEm = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
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

                    message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                } catch (err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('30m'));

            } else {
                message.delete().catch(error => {

                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });
                message.reply('مو مسموح لك تمنشن كثير اشخاص في نفس الرسالة تكمل تاخذ ميوت')

            }
            return;
        }



        
        const emoji = message.content.match(/<a:.+?:\d+>|<:.+?:\d+>/g)
    // const emoji = message.content.match(/^(:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>)/g)

        


        if (emoji !== null && emoji.length >= 5) {
            if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;


            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


            if (!warnsJSON[message.author.id]) {
                warnsJSON[message.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }

            warnsJSON[message.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


            setTimeout(function () {

                warnsJSON[message.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
            }, ms('30m'))


            if (Number.isInteger(warnsJSON[message.author.id].warns / 3)) {
                message.delete().catch(error => {



                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });

                var mutedEm = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``)
                    .setColor('#E3A781')
                message.channel.send(mutedEm)

                const muteRole = message.guild.roles.cache.find(r => r.name === 'T!MUTED')
                const user = message.member
                user.roles.add(muteRole.id)

                var yougotmuted = new Discord.MessageEmbed()
                    .setTitle('**moderation mail**')
                    .setDescription('you have been muted for continuous **|** so you cant send messages in the server')
                    .addField('**action**', '<a:animebonk:833775373908443206> 30m Mute')
                    .addField('**reason**', 'mass emojis')
                    .setColor('RANDOM')

                try {

                    message.author.send(yougotmuted).then(msg => msg.delete({ timeout: 1800000 }))

                } catch (err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('30m'));

            } else {
                message.delete().catch(error => {



                    if (error.code !== 10008) {
                        console.error('failed to delete the message', error);
                    }
                });


                message.reply('مو مسموح لك ترسل ايموجيات كثير بنفس الرسالة تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

            }
            return;
        }
    


        let filter = msg => {
            return msg.content.toLowerCase() == message.content.toLowerCase() &&
                msg.author.id == message.author.id;
        }
    
        message.channel.awaitMessages(filter, { max: 2, time: 15000, errors: ["time"] }).then(collected => {
            if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;
            if (message.channel.id == '796211852920487987') return;
            if (message.channel.id == '811248797669392385') return;
            if (message.content.toLowerCase() == message.content.toLowerCase()) {

                
            var sameJSON = JSON.parse(Fs.readFileSync('./same.json'))


            if (!sameJSON[message.author.id]) {
                sameJSON[message.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./same.json', JSON.stringify(sameJSON))
            }

            sameJSON[message.author.id].warns += 1
            Fs.writeFileSync('./same.json', JSON.stringify(sameJSON))


            setTimeout(function () {

                sameJSON[message.author.id].warns = 0
                Fs.writeFileSync('./same.json', JSON.stringify(sameJSON))
            }, ms('1m'))
            
         
            if (Number.isInteger(sameJSON[message.author.id].warns / 3)) {
               
            let Rmuterole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
            message.member.roles.add(Rmuterole);
            message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> has been **muted** **|** \`${message.author.id}\``).setColor('#E3A781'));
            message.author.send(new Discord.MessageEmbed().setTitle('**moderation mail**').setDescription('you have been muted for continuous **|** so you can not send messages in the server').addField('**action**', '<a:animebonk:833775373908443206> 30m Mute').addField('**reason**', 'spam').setColor('RANDOM')).catch(() => { return });
            setTimeout(() => {
                message.member.roles.remove(Rmuterole);
            }, ms('30m'));
            } else {
                message.reply('تكرار الرسايل ممنوع تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 3500 }))
            }
            return
            }
        }).catch(collected => { console.log('time up') });

        
        const bad = ['كس امك', 'نيك امك', 'نيك اختك', 'كس اختك']

        const msags = message.content.split(' ')

        let textfound = false;

        await Promise.all(
            msags.map((content) => {
                if(bad.includes(content.toLowerCase())) textfound = true;
            })
        )

        
        if (textfound){

            message.delete().catch(error => {
                if (error.code !== 10008) {
                    console.error('failed to delete the message', error);
                }
            });

            message.member.ban();
            message.channel.send(new Discord.MessageEmbed() .setDescription(`${message.author.username} has been **banned** **|** \`${message.author.id}\``) .setColor('#A37970'))
        }
    });
}