module.exports = (client) => {
   // const channelId = '806447826548162580' 
  //  const rules = '768680803940040725' 
    //const info = '772065150957125642'
  
    client.on('guildMemberAdd', (guildMember) => {
        guildMember.guild.channels.cache.get('806447826548162580').send(`**هلا والله نورت سيرفر ENJOY <a:ENJOY_190:808366642634817617>**\n**لا تنسى تشيك القوانين <#768680803940040725> و شرح السيرفر <#772065150957125642> قبل كل حاجة <a:ENJOY_44:786515261012181012>**\n<@${guildMember.user.id}>`)
    //   const message = `**هلا والله نورت سيرفر ENJOY <a:ENJOY_190:808366642634817617>**\n**لا تنسى تشيك القوانين <#768680803940040725> و شرح السيرفر <#772065150957125642> قبل كل حاجة <a:ENJOY_44:786515261012181012>**\n<@${member.id}>`
  
    //   const channel = member.guild.channels.cache.get(channelId)
    //   channel.send(message)
    })
  }






  `**هلا والله نورت سيرفر ENJOY <a:ENJOY_190:808366642634817617>**\n**لا تنسى تشيك القوانين <#768680803940040725> و شرح السيرفر <#772065150957125642> قبل كل حاجة <a:ENJOY_44:786515261012181012>**\n<@${member.id}>`





// client.on('guildMemberAdd', guildMember => {
//     guildMember.guild.channels.cache.get('806447826548162580').send(`**هلا والله نورت سيرفر ENJOY <a:ENJOY_190:808366642634817617>**\n**لا تنسى تشيك القوانين <#768680803940040725> و شرح السيرفر <#772065150957125642> قبل كل حاجة <a:ENJOY_44:786515261012181012>**\n<@${guildMember.user.id}>`)
// }