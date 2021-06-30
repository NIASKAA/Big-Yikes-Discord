const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'inventory',
    description: 'Check your inventory',
    async execute(message, args, cmd, client, Discord, profileData) {
        profileModel.findOne({
            userID: message.author.id
        },
        async(err, data) => {
            if(!data) return message.channel.send('Your inventory is empty')
            const mappedData = Objects.keys(data.inventory).map((key) => {
                return `${key}(${data.inventory[key]})`
            }).join(", ");

            message.channel.send(mappedData);
        }
        );
    },
};