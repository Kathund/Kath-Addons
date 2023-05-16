import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.dungeonsCyberBully) return;
  if (!message.startsWith("PUZZLE FAIL!") && message.includes("Yikes!") || message.includes("[STATUE] Oruo the Omniscient") && message.includes("chose the wrong answer!")) return;
  ChatLib.command(`pc ${message}`);
  ChatLib.command(`ac ${message}`);
})
