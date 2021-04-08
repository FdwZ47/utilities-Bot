const Discord = require('discord.js');
module.exports = {
  name: 'كت',
  aliases: ['c'],
  permissions: ["ADMINISTRATOR"],
  description: 'cut command',
  async execute(client, message, args, Discord) {
    if (message.channel.id !== '796211852920487987') return message.channel.send('you can not use this command here')
   // if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = ['اغنية عالقة معك ذي اليومين', 'وش تفضل النوم او الاكل او الدراسة', 'كلام ودك انه يوصل لشخص معين', 'اكله مستحيل تاكلها؟', 'افضل صديق لك يبدأ بأي حرف؟', 'حاجة صعب تتغير فيك' , 'اذا احد كسر جوالك وش بتعمل', 'اكثر كلمة تنقال لك', 'حاجة ما تتقبل انك تمزح بيها او غيرك يمزح بيها', 'افضل انجازاتك ذا الاسبوع', 'منشن شخص ودك تعطيه بلوك ابدي', 'وش اكثر كلمة تقولها باليوم ', 'افضل لون عندك وش هو', 'كذبة صدقتها و انت صغير', 'اكثر حاجة تعملها وقت فراغك', 'كلمة توصف شعورك الحين', 'برأيك ايش افضل طريقة علشان تفتح سالفة مع واحد ما تعرفه ولا هو يعرفك', 'مادة دراسية ودك انها تصير مو موجودة بالمنهج للأبد', 'منشن شخص عنده سالفة حلوة']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
   // const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setColor('#CAC0FF')
        //.addField('سؤالك', question)
        .setDescription('**كت تويت**', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**كت تويت**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};