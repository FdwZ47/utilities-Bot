module.exports = {
    name: 'unmute',
    aliases: ['un', 'تكلم'],
    permissions: ["MUTE_MEMBERS"],
    description: "this unmutes a member!",
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');

            let memberTarget= message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('<:idk:822217580567592991> I cant find that member!');
        }
    }
}