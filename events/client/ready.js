module.exports = (Discord, client) =>{
    console.log('Demux is online!');

    // const arrayOfstatus = [
    //     'server',
    //     'everyone',
    //     'People in Australia',
    //     'commands',
    //     'channels',
    //     'YouTube',
    //     'People in Canada',
    //     ];

    // const arrayOfpresence = [
    //     'watching',
    //     'watching',
    //     'watching',
    //     'listening',
    //     'streaming',
    // ];

    // let main = 0;
    // setInterval(() => {
        
        // if (main === arrayOfpresence.length) main = 0;
        // const presence = arrayOfpresence[main];
        // console.log(presence)
    

    // if (main === arrayOfstatus.length) main = 0;
    // const Status = arrayOfstatus[main];
    // console.log(Status);


    // client.user.setActivity(Status, { type: 'WATCHING' }).catch(error => console.log(error));
    // main++;
    // }, 30000)

    

    client.user.setActivity('server', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
}