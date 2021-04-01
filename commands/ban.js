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
            const embed = new discord.MessageEmbed()
            .setDescription(`<a:ench_pick:822221894195216385><@${memberTarget.user.id}> has been banned from the server`)
            .setColor('#E30B5C')
            message.channel.send(embed);
        }else{
            message.channel.send('<:idk:822217580567592991> I can t  find this member');
        }
    }
}