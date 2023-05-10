import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiMysteryBox) return;
  if (!message.includes("✦") && !message.includes("Mystery Box!")) return;
  cancel(event)
})
