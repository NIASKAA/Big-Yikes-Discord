const profileModel = require('../models/profileSchema');
const items = require('../models/shopItems');

module.exports = {
    name: 'buy',
    description: 'Buy something from the shop',
    async execute(message, args, cmd, client, Discord, profileData) {
        if(!args[0]) return message.send('Specify which item you want to buy brah');
        const itemToBuy = args[0]

        const validItem = !!items.find((val) => val.item === itemToBuy);
        if(!validItem) return message.reply('The item is not valid');

        const itemPrice = items.find((val) => (val.item === itemToBuy)).price;

        
        if(profileData.coins < itemPrice) return message.reply("You don't have enough money!");

        profileModel.findOne({
            UserID: message.author.id
        },
        async (err, data) => {
            if(data) {
                const hasItem = Object.keys(data.inventory).includes(itemToBuy);
                if(!hasItem) {
                    data.inventory[itemToBuy] = 1;
                } else {
                    data.inventory[itemToBuy]++;
                }
                console.log(data);
                await profileModel.findOneAndUpdate({userID: message.author.id}, data);
            }
            message.channel.send(`You bought ${itemToBuy}`);
        })
    }
};