//exports.run = (Discord, message) => {
    ////message.channel.send(`Pong! It took me \${${Date.now() - message.createdTimestamp}} ms\ to respond`);
    //embed = new Discord.RichEmbed();
        //embed.setColor("#00FFFB");
        //embed.setAuthor(`${client.config.branch} Ping`);
        //embed.addField("Pong!", `It took me \`${`${Date.now() - message.createdTimestamp}`} ms\` to respond`, true);
        //embed.setFooter(`${client.config.branch} by JPlexer ${client.config.botver}`);
        //message.channel.send("", {
        //    embed
        //});
        //return true;
//}
exports.run = async (client, message, args) => {
    const msg = await message.channel.send("Ping?");
    setTimeout(2000);
    msg.edit(`Pong! It took me ${Date.now() - message.createdTimestamp} ms to respond`);
  };
  
  exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
    usage: "ping"
  };