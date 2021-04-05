module.exports = {
    name: 'kick',
    aliases: ['k', 'طرد'],
    permissions: ["KICK_MEMBERS"],
    description: "this command kicks a member!",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();

            message.channel.send("user has been kicked");
        }else{
            message.channel.send('<:idk:822217580567592991> I can t find this member');
        }
        if (
            message.member.roles.highest.position <=
            member.roles.highest.position
        )
        return message.channel.send(new Discord.MessageEmbed() .setTitle(`<:NO:828567406347419669> Unable to kick ${user.username}!`) .setDescription(`<@${memberTarget.user.id}> has a higher or equal role than me which means **i can't do anything to him**`) .setColor('RED'));

    }
}