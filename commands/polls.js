const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'poll',
    description: 'Make a poll about something',
    async execute(message, args, cmd, client, Discord, profileData) {
        const arg = args.slice(1).join(" ")

        if(!arg) return message.reply("Tell me what to poll about at least bruh");
        const Embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("Poll Time")
        .setDescription(arg)
        .setFooter(`Poll started by ${message.author.username}`)
        await Embed.react('👍')
        await Embed.react('👎')
    }
}