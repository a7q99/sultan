const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` 💜  `,'https://www.twitch.tv/A7Q9')

});
client.login(process.env.BOT_TOKEN);
