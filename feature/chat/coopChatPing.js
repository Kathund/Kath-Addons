import Settings from "../../settings";
const config = Settings

register("chat", () => {
  try {
    if (!config.chatCoopPing) return;
    World.playSound("random.orb", 2, 1);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setCriteria("&r&bCo-op > ${*}");
