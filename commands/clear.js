module.exports = {
    name: 'clear',
    aliases: ['cl', 'مسح'],
    permissions: ["MANAGE_MESSAGES"],
    description: "clear messages!",
    async execute(client, message, args) {
        if(!args[0]) return message.reply("please enter the amount of messages thet you want to clear");
        if(isNaN(args[0])) return message.reply("please enter a real number!")

        if(args[0] > 100) return message.reply("you canno't delete more than 100 messages!");
        if(args[0] < 1) return message.reply("you must delete atleaste one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}