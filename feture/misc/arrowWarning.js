import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.includes("You only have 50") && message.includes("left in your Quiver!") || message.includes("You only have 10") && message.includes("left in your Quiver!")) {
    if (!config.miscArrowWarning) return;
    Client.showTitle("&cLow Arrows!", "", 1, 30, 1);
    if (!config.generalAlertSound) return;
    World.playSound("random.orb", 2, 1);
  }
})
