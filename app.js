const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const prefix = "!";
client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.channel.send('pong')
    }
});

client.on('message', msg => {
    if(msg.content === 'Hi') {
        msg.reply('Helloo')
    }
});

client.on('message', msg => {
    if(msg.content === 'Hello') {
        msg.reply('Hi')
    }
});

client.on('message', msg => {
    if(msg.content === 'Marco') {
        msg.channel.send('Pollo')
    }
});

const badjokes = 
[
    "HAMBURGER PLS",
    "I have no idea what to even joke about.."
];

client.on('message', (msg) => {
    if(msg.content === '?joke') {
        msg.channel.send(badjokes[Math.floor(Math.random() * badjokes.length)]);
    }
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole);
});