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
        !jokes \n
        !roast \n
        !wey \n
        \n
        Economy commands: \n
        !balance \n
        !daily \n
        !beg \n
        !withdraw \n
        !deposit \n
        !work \n
        !shop \n 
        !buy \n
        !inventory \n
        `);
    }
};