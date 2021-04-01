module.exports = {
    name: 'ban',
    aliases: ['b', 'باند'],
    permissions: ["BAN_MEMBERS"],
    description: "this command bans a member!",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(`<a:ench_pick:822221894195216385>${memberTarget.user.name} has been **banned** from the server`);
        }else{
            message.channel.send('<:idk:822217580567592991> I can t  find this member');
        }
    }
}