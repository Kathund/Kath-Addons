import * as helperFunction from "../../../helperFunctions.js";
import { Promise } from '../../../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import Settings from "../../../settings";
const config = Settings

register("chat", (event) => {
  try {
    if (!config.miscLeaveOnThrow) return
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!message.includes("You were killed by")) return;
    ChatLib.say("/pc I THROWING!! I am So bad I am legit a troll. I would recommend ignore adding me because how bad I am. Since I am SOOOOO BAD I am going to leave the party bye bye")
    delay(300).then(() => ChatLib.say("/p leave"))
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
})
