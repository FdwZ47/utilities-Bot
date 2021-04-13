module.exports = {
    name: 'kick',
    aliases: ['k', 'طرد'],
    permissions: ["KICK_MEMBERS"],
    description: "this command kicks a member!",
    execute(client, message, args, Discord){

        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();

            message.channel.send("user has been kicked");
        }else{
            message.channel.send('<:idk:822217580567592991> I can t find this member');
        }
    }
}