import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register("chat", function (event) {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.startsWith("-----------------------------------------------------") && message.includes('has invited you to join their party!')) {
    if (!config.partyFragBot) return;
    const pattern = /(?:\[(\w+)\]\s+)?(\w+)\s+has invited you to join their party!/;
    const match = message.match(pattern);
    if (!match) return;
    const username = match[2];
    ChatLib.command(`p accept ${username}`);
    setTimeout(function () {
      ChatLib.command(`p leave`);
    }, 5000);
  }
});
