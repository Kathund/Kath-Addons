import Settings from "../../settings";
const config = Settings

register("chat", () => {
  if (!config.dungeonsBloodAlert) return
  Client.showTitle("&cBlood Ready!", "", 1, 30, 1)
  if (config.generalAlertSound) World.playSound("random.orb", 2, 1)
}).setCriteria(/^\[BOSS\] The Watcher: That will be enough for now\.$/)
