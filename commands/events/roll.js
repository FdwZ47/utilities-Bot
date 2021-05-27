const Discord = require('discord.js');
const ms = require('ms')
module.exports = {
  name: 'roll',
  aliases: [],
  permissions: ["SEND_TTS_MESSAGES"],
  description: 'send a random number command',
  async execute(client, message, args, Discord) {

    const some = ['something went wrong...', 'generating..', 'generating..', 'generating..', 'generating..', 'generating..', 'generating..', 'generating..'];

    const so = Math.floor(Math.random() * some.length);
    
    let msg;
    msg = await message.channel.send(some[so])
   const numbers = [];

   while(numbers.length < 100){
       var r = Math.floor(Math.random() * 100) +1
       if(numbers.indexOf(r) === -1) numbers.push(r)
   }

   const res = Math.floor(Math.random() * numbers.length);

   setTimeout(() =>{
   msg.edit(`:game_die: ${message.author.username} rolled a **${numbers[res]}**`)
   }, ms('4s'))
}
};