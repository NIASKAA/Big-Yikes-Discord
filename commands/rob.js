const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'rob',
    cooldown: 40000,
    description: 'Being a thief',
    async execute(message, args, cmd, client, Discord, profileData) {
        let target = message.mentions.users.first()
        let author = await message.author.id
        let random = Math.floor(Math.random() * 200) + 1;

        if(!user) {
            return message.channel.send('You need to tell me who to rob at least bruh');
        }
        if(targetUser < 0) {
            return message.channel.send(`${user.user.username} is broke af and don't have anything left to rob`)
        }
        try{
            const targetData = await profileModel.findOne({
                userID: target.id
            });
            if(!targetData) return message.channel.send("This user don't exist");
            await profileModel.findOneAndUpdate({
                userID: target.id,
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
        
    }
}