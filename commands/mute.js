const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['m', 'اسكت', 'اص'],
    permissions: ["MUTE_MEMBERS"],
    description: "this mutes a member!",
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<:pickaxe:821829362227347526><@${memberTarget.user.id}> has been muted for **${ms(ms(args[1]))}**`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`**hi <@${memberTarget.user.id}> you are now unmuted**<a:yes_1:823243336664088616>`);
            }, ms(args[1]));
        } else {
            message.channel.send('<:idk:822217580567592991> I cannot find this member');
        }
    }
}