import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register("chat", () => {
  try {
    if (!config.chatCoopPing) return;
    World.playSound("random.orb", 2, 1);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
}).setCriteria("&r&bCo-op > ${*}");
