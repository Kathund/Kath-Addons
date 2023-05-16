import Settings from "../../settings";
const config = Settings

register("chat", () => {
  if (config.chatCoopPing) World.playSound("random.orb", 2, 1);
}).setCriteria("&r&bCo-op > ${*}");
