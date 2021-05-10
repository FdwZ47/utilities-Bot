const Discord = require('discord.js');
module.exports = {
  name: 'كت',
  aliases: ['ك'],
  permissions: ["SEND_TTS_MESSAGES"],
  description: 'cut command',
  async execute(client, message, args, Discord) {
   // if (!member) member.roles.cache.has('827273929818898443') return;
 //  if (message.channel.id !== '796211852920487987') return message.channel.send('you can not use this command here')
   // if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = [' اغنية عالقة معك ذي اليومين', 'وش تفضل النوم او الاكل او الدراسة', 'كلام ودك انه يوصل لشخص معين', 'اكله مستحيل تاكلها؟', 'افضل صديق لك يبدأ بأي حرف؟', 'حاجة صعب تتغير فيك' , 'اذا احد كسر جوالك وش بتعمل', 'اكثر كلمة تنقال لك', 'حاجة ما تتقبل انك تمزح بيها او غيرك يمزح بيها', 'افضل انجازاتك ذا الاسبوع', 'منشن شخص ودك تعطيه بلوك ابدي', 'وش اكثر كلمة تقولها باليوم ', 'افضل لون عندك وش هو', 'كذبة صدقتها و انت صغير', 'اكثر حاجة تعملها وقت فراغك', 'كلمة توصف شعورك الحين', 'برأيك ايش افضل طريقة علشان تفتح سالفة مع واحد ما تعرفه ولا هو يعرفك', 'مادة دراسية ودك انها تصير مو موجودة بالمنهج للأبد', 'منشن شخص عنده سالفة حلوة', 'متى لازم تقول لا', 'لقبك عند اخوياك', 'منشن الشخص الي يستحق تدخل الديسكورد عشانه', 'كم من 10 نسبة الكسل فيك ذي الايام', 'منشن صديقك الفزعة', 'امنية تمنيتها و تحققت', 'كم من 10 تتوقع انه يصير الي في بالك و ايش هو', 'دايما الانطباع الاول عنك انك شخص؟', 'صفة تجذبك لغيرك', 'سؤال ما تحب احد يسألك عنه', 'تحس اسمك غريب او عادي', 'شخص يعرف عنك كل شي', 'اطول مدة مرت لك بدون ما تاكل حاجة', 'صف نفسك بكلمة وحدة', 'تقييمك لذي السنة من 10', 'اكثر مدة مرت عليك بدون نت', 'اكثر حاجة ساحب عليها الفترة ذي', 'اذا بيه موضوع ما تفهم فيه حاجة تتدخل ولا تسمع بس', 'مدينة ودك تزورها', 'وش اسمك بدون اول حرف', 'كم من 10 تكره المدرسة', 'ليه عامل حسابك', 'اخر كف جاك من منو', 'الطف كلمة وصلتك', 'متى اخر مرة تضاربت مع احد و ليه', 'انت تهتم للتفاصيل ولا زبدة الموضوع', 'انت دايم تكلم اصحابك ولا سحبة', 'اكثر حاجة تخليك ما تثق بالشخص', 'منشن شخص غير اسلوبك مع غيرك', 'شي ودك تجربه', 'اذا خيروك تعيد الدراسة ايش السنة الي بتختارها 1- الابتدائي 2- الثانوي 3- الجامعة', 'اكثر فترة دراسية قريبة لقلبك و كونت فيها اصدقاء', 'هل لديك فوبيا من شي معين', 'اخر مرة قابلت فيها احد المشاهير', 'منشن شخص دايم يسعدك', 'وش فطورك اليوم', 'منشن شخص و قول انت اسطورة']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
   // const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setColor('RANDOM')
        //.addField('سؤالك', question)
        .addField('**كت**', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**كت**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};