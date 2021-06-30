const profileModel = require('../models/profileSchema');
const items = require('../models/fishList');

module.exports = {
    name: 'fish',
    cooldown: 1000,
    description: 'Fish for your fish',
    async execute(message, args, cmd, client, Discord, profileData) {
        const fish = [
            "**🐠 `(Tropical Fish)`",
            "**🐟 `(Fish)`",
            "**🐡 `(Blow Fish)`",
            "**🐬 `(Dolphin)`",
            "**🦐 `(Shrimp)`",
            "**🦈 `(Shark)`",
            "**🔋 `(Battery)`",
            "**🦂 `(Scorpion)`",
            "**⛸ `(Ice Skate)`",
            "**👕 `(Shirt)`",
            "**📦 `(Package)`",
            "**🏓 `(Ping Pong)`",
            "**🦑 `(Squid)`",
            "**⚽ `(Soccer)`"
        ]
        const randomFish = Math.floor((Math.random() * fish.length));
        const fishPrice = Math.floor((Math.random() * 500) + 1);
        params = {
            userID: message.author.id,
            serverID:  message.guild.id
        }
        profileModel.findOne(params, async(err, data) => {
            if(data) {
                const getFish = Object.keys(data.inventory).includes(randomFish);
                if(!getFish) {
                    data.inventory[randomFish] = 1;
                } else {
                    data.inventory[randomFish]++;
                }
                await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: fishPrice,
                    }
                }, data);
                message.reply(`You fished a ${randomFish} and got ${fishPrice}`);
            }
        })
    }
}