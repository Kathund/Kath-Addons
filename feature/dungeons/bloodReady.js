import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.includes("[BOSS] The Watcher: That will be enough for now.")) {
    if (!config.dungeonsBloodAlert) return;
    Client.showTitle("&cBlood Ready!", "", 1, 30, 1)
    if (!config.generalAlertSound) return;
    World.playSound("random.orb", 2, 1);
  }
})
