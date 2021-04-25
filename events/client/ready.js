module.exports = (Discord, client) =>{
    console.log('Tanya is online!');


    client.user.setActivity('server', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
}