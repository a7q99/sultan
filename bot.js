const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  You can get everything by force except respect and love `,'https://www.twitch.tv/a7q9')

});
client.login(process.env.BOT_TOKEN);
