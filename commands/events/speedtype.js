// const Discord = require('discord.js');
// const Canvas = require('canvas')
// module.exports = {
//   name: 'draw',
//   aliases: ['اسرع'],
//   permissions: ["SEND_TTS_MESSAGES"],
//   description: 'send image command',
//   async execute(client, message, args, Discord) {


//     const apply = (canvas, text) => {
//         const ctx = canvas.getContext('2d')

//         let size = 100

//         do {
//             ctx.font = `${size -= 2}px sans-serif`;
//         } while (ctx.measureText(text).width > canvas.width - 300);

//         return ctx.font;
//     }
//     const canvas = Canvas.createCanvas(700, 350)
//     const ctx = canvas.getContext('2d')

//     const image = await Canvas.loadImage('./speed.png')

//     const some = args.join(' ');

//     if (!some) return;

//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

//     ctx.font = apply(canvas, `${some}`)

//     ctx.fillStyle = '#ffffff'

//     ctx.fillText(`${some}`, canvas.width / 3.5, canvas.height / 1.8)
    
//     const att = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');

    

//     message.delete().catch(error => {
//       if (error.code !== 10008) {
//           console.error('failed to delete the message', error);
//       }
//   });
  
//     message.channel.send(att)
//   }
// };