const Discord = require('discord.js');
module.exports = {
    name: 'bot activity',
    aliases: ['botact'],
    permissions: [],
    description: "this command change the bot activity",
    execute(client, message, args, Discord){
        if(message.author.id != 755767643331362916) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> For developer') .setDescription('only my developer can run this command') .setColor('#9542FF'));
        //here you tell the bot to choose the kind of activity
if (args[0] === "playing"){
    types = 0
} else if (args[0] === "streaming") {
    types = 1
} else if (args[0] === "listening") {
    types = 2
} else if (args[0] === "watching") {
    types = 3
} else if (args[0] === "competing") {
    types = 5
} else if (args[0] === "reset") {

    client.user.setActivity(`commands`, {type:"LISTENING"}) //you can change that to whatever you like

    return message.channel.send('<a:yes_1:823243336664088616> Status changed succesfully')

} else {
    return message.channel.send('Invalid activity type.')
}
//here you tell the bot what the activity is
    args.shift()
    content = args.join(' ')
    client.user.setPresence({
        activity: {
            name: content,
            type: types
        }
    })
    message.channel.send('<:gears:819943211530977350> Status changed succesfully')
    }

    }