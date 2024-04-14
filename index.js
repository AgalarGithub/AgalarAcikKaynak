const express = require('express');
const app = express();
const Database = require("@replit/database");
const db = new Database();

app.get("/", (req, res) => {
  res.send("Merhaba! Ben agalar botu. Beni kullanmak için discord'da !yardım yazabilirsin.");
});

app.listen(3000, () => {
  console.log("Proje hazır!");
});

const Discord = require("discord.js")
const client = new Discord.Client();
client.commands = new Discord.Collection(); // Komutları saklamak için bir Discord.Collection oluştur

// Komutları yükle
const fs = require('fs');
const komutDosyaları = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));
for (const dosya of komutDosyaları) {
  const komut = require(`./komutlar/${dosya}`);
  client.commands.set(komut.name, komut);
}

client.on("message", async message => {
  if (message.content === "ping") {
    message.channel.send("pong!");
  }

  if (message.content.toLowerCase().startsWith("!cüzdan") || message.content.toLowerCase().startsWith("!param")) {
    client.commands.get('cüzdan').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!günlük")) {
    client.commands.get('günlük').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!görev")) {
    client.commands.get('yakinda').execute(message, Discord);
  }

  if (message.content.toLowerCase().startsWith("!ticaret")) {
    client.commands.get('ticaret').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!dilen")) {
    client.commands.get('dilen').execute(message, db, Discord);
  }
  
  if (message.content.toLowerCase().startsWith("!para-yatır")) {
    client.commands.get('para-yatır').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!para-çek")) {
    client.commands.get('para-çek').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!para-at")) {
    client.commands.get('yakinda').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!slots")) {
    client.commands.get('slots').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!yazı-tura")) {
    client.commands.get('yazı-tura').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!envanter")) {
    client.commands.get('envanter').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!krallar")) {
    client.commands.get('yakinda').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!borsa")) {
    client.commands.get('yakinda').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!para-ver")) {
    client.commands.get('yakinda').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!yardım")) {
    client.commands.get('yardım').execute(message, db, Discord);
  }

  if (message.content.toLowerCase().startsWith("!para-kazan")) {
    client.commands.get('para-kazan').execute(message, db, Discord);
  }

  
});

client.login(process.env.token);
