//const Discord = require('discord.js');
// const Canvas = require('canvas');
// const Fs = require('fs')
// const ms = require('ms')
// module.exports = async (client, discord, guildMember) => {


//   const apply = (canvas, text) => {
//     const ctx = canvas.getContext('2d')
//     let size = 70

//     do {
//       ctx.font = `${size -= 10}px sans-serif`
//     } while (ctx.measureText(text).width > canvas.width - 300);

//     return ctx.font
//   }
//     const canvas = Canvas.createCanvas(700, 300)
//     const context = canvas.getContext('2d')

//     const image = await Canvas.loadImage('./speed.png')

//     context.drawImage(image, 0, 0, canvas.width, canvas.height);

//     context.font = '28px sans-serif'
//     context.fillStyle = '#ffffff'
//     context.fillText('welcome', canvas.width / 2.5, canvas.height / 3.5)

//     context.font = apply(canvas, `${guildMember.displayName}`)
//     context.fillStyle = '#ffffff'
//     context.fillText(`${guildMember.displayName}`, canvas.width / 2.5, canvas.height / 3.5)
    

//    context.beginPath();

//   // 125, 125, 100, 0,
//    context.arc(122.5, 141.8, 81, 0, Math.PI * 2, true)

//    context.lineWidth = 6
//    context.closePath();

//    context.clip()
//    const av = await Canvas.loadImage(guildMember.user.displayAvatarURL({ format: 'jpg'}));
//    // 25, 25, 200, 200
//    context.drawImage(av, 41.5, 60.5, 162, 162);

//     const att = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');


     
//   // context.strokeRect(0, 0, Canvas.width, Canvas.height);


    
//     guildMember.guild.channels.cache.get('826711468207767564').send(`work, ${guildMember}`, att)

 
// }