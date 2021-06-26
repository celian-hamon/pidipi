const Discord = require("discord.js");
const keys = require("./keys.json");

//crée un client discord
const client = new Discord.Client();

//se connecte a discord avec le token du bot
client.login(keys.BOT_TOKEN);

//log un message une fois pret et met un status
client.on("ready", () => {
    console.log("CryptobotO_ : I am ready!");
    client.user.setActivity("les autres vendre des bigmac car il est riche", { type: "WATCHING" });
});

client.on()