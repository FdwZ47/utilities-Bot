module.exports = (Discord, client) =>{
    console.log('Tanya is online!');


    client.user.setActivity('Tanya sleeping room', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
}