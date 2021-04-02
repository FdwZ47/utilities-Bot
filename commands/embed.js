const Discord = require('discord.js')

module.exports = {
    name: "embed",
    aliases: ['em', 'make'],
    permissions: ["ADMINISTRATOR"],
    description: "make embed",

    async execute(client, message,  args){
        let title = args[0] // args[0] is the first word or number after the command name
        let color = args[1] 
        let description = args.slice(2).join(" ") // args.slice(2).join(" ") means we're taking all the arguments including and after the second argument. An argument is just a word or number.
        const error = new Discord.MessageEmbed() 
        .setColor('#93BFE6')
        .setTitle('**<:gears:819943211530977350> Invalid args**')
        .setDescription('`<:info:821779298952151050> please make sure to type title(one word), color(hex code or basic colors in caps), description(embed body))`')

        if(!title) return message.channel.send(error) // ! means no, so if there's no title, return and send the error embed
        if(!color) return message.channel.send(error)
        if(!description) return message.channel.send(error)


        const embed = new Discord.MessageEmbed()
        .setTitle(`**${title}**`)
        .setColor(color)
        .setDescription(description)
        message.delete() // this deletes the command

        message.channel.send(embed)
    }
}