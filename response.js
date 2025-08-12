const Discord = require('discord.js');
const Fs = require('fs');
const ms = require('ms');
module.exports = (client, message) =>{
    client.on('message', message => {
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (message.content === "[your msg]") {
            if (message.content.length >= 13) return
            message.channel.send(`**[your msg] <@${message.author.id}> <a:ENJOY_44:786515261012181012>**`)

        } else if (message.content === "[your msg]") {
            if (message.content.length >= 4) return
            message.channel.send(`**[your msg] <@${message.author.id}> <a:ENJOY_95:790545328021045268> <a:ENJOY_95:790545328021045268> **`)
    
        } else if (message.content === "[your msg]") {
            if (message.content.length >= 4) return
            message.channel.send(`**[your msg] <@${message.author.id}> عاد لا تطول**<a:ENJOY_183:805837612988104704>`)
    
        } else if (message.content === "[your msg]") {
            if (message.content.length >= 11) return
            message.channel.send(`**[your msg] <@${message.author.id}> <a:ENJOY_44:786515261012181012>**`)
    
        } 
    })
}