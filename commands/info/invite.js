const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: [],
  description: "Support invite",
  usage: "Invite",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor("BLACK")
    .setTitle(`<a:role:899460556963074099> Invite`)

    .setDescription(`
[click here](https://discord.com/api/oauth2/authorize?client_id=785878809290473532&permissions=8&scope=bot)
`)
    .setFooter(`${message.author.username}`)
    .setImage(`https://cdn.discordapp.com/avatars/785878809290473532/83f9dba771ffd2ad9e10e38ac915977c.png?size=4096`)
    .setTimestamp();
    message.react(`<a:role:899460556963074099>`)
 
      return message.channel.send(embed);
    
  }
};
