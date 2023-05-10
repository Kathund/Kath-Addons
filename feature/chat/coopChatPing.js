import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register("chat", () => {
  if (!config.chatCoopPing) return;
  World.playSound("random.orb", 2, 1);
}).setCriteria("&r&bCo-op > ${*}");
