const Discord = require('discord.js');
const Fs = require('fs');
const ms = require('ms');
module.exports = (client) => {
    client.on('message', async (message) => {
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (message.member && message.member.hasPermission('ADMINISTRATOR')) return;
        if (message.author.bot) return;

        //   const array = ["test"];
        const array = [' زق', 'يالكلب', 'مخنث', 'سفلة', 'ملعون', 'fuke', 'bitch', 'سحاقية', 'يالكلاب', 'كلتبن', 'كل تبن', 'قحبة', 'Fuke', 'ز.ق'];
        // for (var)
        for (var i = 0; i < array.length; i++) {
            // if(array.some(w => `${message.content.toLowerCase()}`.includes(`${w}`))){
            if (message.content.toLowerCase().includes(array[i].toLowerCase())) {

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
                        .addField('action', '<a:animebonk:833775373908443206> 30m mute')
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

                    message.reply('<a:animebonk:833775373908443206> السب و الكلمات المسيئة ممنوعة في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

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
                    message.reply('<a:animebonk:833775373908443206> هذي الايموجيات ممنوعة في السيرفر, تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

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
                message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل روابط بالشات هذا, تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

            }
            return;
        }





        if (message.content.length >= 725) {


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
                message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل رسايل طويلة و مزعجة في الشات هذا, تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

            }

            return;
        };

        try {

            var linneArray = message.content.match(/\n/g)

            var number = linneArray.length
            if (number >= 85) {

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
                    message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل رسايل طويلة و مزعجة في الشات هذا, تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

                }
                return;
            }
        } catch (err) {

        }




        if (message.mentions.users.size >= 13) {


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
                message.reply('<a:animebonk:833775373908443206> مو مسموح لك تمنشن كثير اشخاص في نفس الرسالة, تكمل تاخذ ميوت')

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
                message.reply('<a:animebonk:833775373908443206> الكلمات هذي ممنوعة في السيرفر').then(msg => msg.delete({ timeout: 3500 }))

            }



        const emoji = message.content.match(/<:.+?:\d+>/g)



        if (emoji !== null && emoji.length >= 5) {


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


                message.reply('<a:animebonk:833775373908443206> مو مسموح لك ترسل ايموجيات كثير بنفس الرسالة, تكمل تاخذ ميوت').then(msg => msg.delete({ timeout: 5000 }))

            }
            return;
        }


    });
}