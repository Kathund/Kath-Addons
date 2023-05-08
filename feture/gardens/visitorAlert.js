import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.includes("has arrived on your Garden!")) {
    if (!config.gardenVisitorAlert) return;
    const words = message.split(' ');
    const name = words.slice(0, words.indexOf('has')).join(' ');
    Client.showTitle(`&b&l${name} &r&fhas arrived on your Garden!`, "", 1, 30, 1);
    if (!config.generalAlertSound) return;
    World.playSound("random.orb", 2, 1);
  }
})
