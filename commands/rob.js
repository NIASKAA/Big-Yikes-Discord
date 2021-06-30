const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'rob',
    cooldown: 1000,
    description: 'Being a thief',
    async execute(message, args, cmd, client, Discord, profileData) {
        let user = message.mentions.users.first()
        let random = Math.floor(Math.random() * 200) + 1;

        if(!user) {
            return message.channel.send('You need to tell me who to rob at least bruh');
        }
        if(targetUser < 0) {
            return message.channel.send(`${user} is broke af and don't have anything left to rob`)
        }
        try{
            const targetData = await profileModel.findOne({
                userID: user.id
            });
            if(!targetData) return message.channel.send("This user don't exist");
            await profileModel.findOneAndUpdate({
                userID: user.id,
            },
            {
                $inc: {
                    coins: -random,
                }
            });
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            },
            {
                $inc: {
                    coins: random
                }
            });
        } catch(err) {
            console.log(err);
        }
        message.channel.send(`You robbed ${user.user.username} and took ${random}`);
    }
}