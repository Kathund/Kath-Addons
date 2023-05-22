import Settings from "../../settings";
const config = Settings

register("chat", () => {
  try {
    if (!config.dungeonsBloodAlert) return
    Client.showTitle("&cBlood Ready!", "", 1, 30, 1)
    if (config.generalAlertSound) World.playSound("random.orb", 2, 1)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
}).setCriteria(/^\[BOSS\] The Watcher: That will be enough for now\.$/)
