const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` سيبقى حذائي وكلام الناس أخوه للأبد  `,'https://www.twitch.tv/a7q9')

});
client.login("NzEwMDMyODA3NDkzMTA3NzY0.XrunMw.lI7XAaq3ErLIZ9SaVrbovj0TOHs");
