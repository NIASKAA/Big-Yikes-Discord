const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'beg',
    description: "Beg for money cause you broke af",
    async execute(message, args, cmd, client, Discord, profileData) {
        const randomNumber = Math.floor(Math.random() * 400) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                coins: randomNumber, 
            }
        });
        return message.channel.send(`${message.author.username} begged and received ${randomNumber}`);
    },
};