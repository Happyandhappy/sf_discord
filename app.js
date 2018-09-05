const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const csvCtrl = require('./csvController.js');
const config = require('./config.json');

client.on('ready',()=>{
  console.log(`Logged in as ${client.user.tag}! ${client.guilds.size} discords`);
});

client.on('message', msg=>{
    if (msg.author.id != client.user.id){
        csvCtrl.getCsvData(msg).then(function(res){
            msg.reply(res);
        });
    }
});

client.login(config.Token);
