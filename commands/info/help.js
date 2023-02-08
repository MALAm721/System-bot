const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: [],
  description: "Show Help Command",
  usage: "Help",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor("BLACK")
    .setTitle(`Help Commands!`)
    .setImage("https://cdn.discordapp.com/avatars/785878809290473532/83f9dba771ffd2ad9e10e38ac915977c.png?size=4096")
    .setDescription(`
  ━────╮<a:systam:899937116866379786>╭────━  
**Info**
\`help\`, \`ping\`, \`serverinfo\`,
\`userinfo\`, \`invite\`
━────╮<a:532:899940118855569460>╭────━  
**Moderation**
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`
━────╮<a:u777:899940373068120094>╭────━  
**Funny**
\`ascii\`, \`avatar\`, \`dicksize\`,
\`howgay\`, \`rate\`
━────╮<a:disc4432:899940357729550407>╭────━  
**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`couple\`,
\`emoji\`
━────╮<a:fff000:899940328855986206>╭────━  
**Photos**
\`picboy\`, \`picgirl\`, \`picanime\`,
\`picanimal\`, \`picbaby\`, \`piccouple\`,
\`picemoji\`
━────╮<a:hhh789:899940290905915412>╭────━  
**Texts**
\`textkurdish\`, \`textenglish\`, \`textarabic\`


`)
    .setFooter(`${message.author.username}`)
    .setImage(`https://cdn.discordapp.com/avatars/785878809290473532/83f9dba771ffd2ad9e10e38ac915977c.png?size=4096`)
    .setTimestamp();
    message.react(`<a:sport:899583280725250058>`)
 
      return message.channel.send(embed);
    
  }
};
