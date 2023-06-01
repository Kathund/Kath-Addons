import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!config.chatAntiCombo) return;
    if (message.includes("Kill Combo")) {
      cancel(event)
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
})
