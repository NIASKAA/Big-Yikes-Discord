const { execute } = require("./play");

module.exports = {
    name: 'help',
    description: 'List of commands available',
    async execute(message, args, cmd, client, Discord) {
        message.channel.send(`
        I can do these commands for now: \n
        !ping \n
        !play \n
        !stop \n
        !skip \n
        !price \n
        !news \n
        !help \n
        !joke \n
        !roast \n
        `);
    }
};