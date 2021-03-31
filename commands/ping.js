module.exports = {
    name: 'ping',
    aliases: ['p', 'بنق'],
    description: "this is a ping command!",
    execute(client, message, args){
        message.channel.send('pong!');
    }
}