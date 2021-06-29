const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'daily',
    description: 'claim your daily money',
    cooldown: 86400,
    async execute(message, args, cmd, client, Discord, profileData) {
        const DailyCoins = Math.floor(Math.random() * 200) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                coins: DailyCoins,
            }
        });
        return message.channel.send(`${message.author.username} got ${DailyCoins} from dailies!`);
    }
}