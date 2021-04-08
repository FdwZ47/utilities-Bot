const ms = require('ms')
const Discord = require('discord.js');
module.exports = {
    name: "remind",
    aliases: ['re'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description:{
        usage: "remind <time> <reminder>",
        content:  "Helps remind you something",
    },
    async execute(client, message, args, Discord) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setTitle('<:NO:828567406347419669> Invalid timer')
            .setDescription('Please specify the time')
            .addField('For example', '>remind 20m <reason>')

        const wrongtime = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**Make sure to End The number with d , m , h or s**`)

        const reminderembed = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**Please tell me what you want to be reminded off**`)

        if (!args[0]) return message.channel.send(notime)
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send(wrongtime)
        if (!reminder) return message.channel.send(reminderembed)

        const remindertime = new Discord.MessageEmbed()
        .setColor('#33F304')
        .setDescription(`\**<a:yes_1:823243336664088616> Your reminder will go off in ${time}**`)

        message.channel.send(remindertime)

        const reminderdm = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('**REMINDER**')
        .setDescription(`**It has been ${time} here is your reminder:** ${reminder}`)  

        setTimeout(async function () {
           try{

            await user.send(reminderdm)
           }catch(err){

           } 
           
        }, ms(time));
    }
}