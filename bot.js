const Discord = require("discord.js");
const keys = require("./keys.json");

//crée un client discord
const client = new Discord.Client();

//se connecte a discord avec le token du bot
client.login(keys.BOT_TOKEN);

//log un message une fois pret et met un status
client.on("ready", () => {
    console.log("pret");
    client.user.setActivity("oue", { type: "PLAYING" });
});

let prefix = "!"

client.on('message', message => {
    //Exclus les messages ne commencant pas par le préfix ou provenant d'un bot 
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //split le messages en differentes parties afin de le traiter
    let commandBody = message.content.slice(prefix.length);
    let args = commandBody.split(" ");
    let command = args.shift().toLowerCase();

    if (command === "join") {
        console.log("ddddd")












    }
    if (command === "dev") {
        message.aut.voice.channel.leave();
        message.delete();
    }

});


client.on("ready", () => {
    const channel = client.channels.cache.get("851144976691625989");
    const cece = channel.guild.members.cache.get('370169515515838465')
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
        while (true) { if (cece.voice.speaking) { console.log("true") } }
    }).catch(e => {
        console.error(e);
    });
});