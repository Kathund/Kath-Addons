import * as helperFunction from "../../../helperFunctions.js";
import { Promise } from '../../../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import Settings from "../../../settings";
const config = Settings

register("chat", (event) => {
  try {
    if (!config.miscLeaveOnThrow) return
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (message.startsWith(" ☠") && message.includes("was killed by") && message.includes("you")) {
      ChatLib.chat("/pc I THROW!! I am So bad I am legit a troll. I would recommend ignore adding me because how bad I am. Since I am SOOOOO BAD I am going to leave the party bye bye")
      delay(150).then(() => ChatLib.chat("/p leave"))
    }
    if (config.miscBanOnThrow) Client.disconnect()
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
