const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const csvCtrl = require('./csvController.js');
const config = JSON.parse(fs.readFileSync("config.json"));

client.on('ready',()=>{
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg=>{
  if (msg.content === 'hi'){
    msg.reply(csvCtrl.getCsvData(msg.content));
  }
});

client.login(config.Token);
