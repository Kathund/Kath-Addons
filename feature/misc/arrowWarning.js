import Settings from "../../settings";
const config = Settings

register("chat", () => {
  if (config.miscArrowWarning) Client.showTitle("&cLow Arrows!", "", 1, 30, 1)
  if (config.generalAlertSound) World.playSound("random.orb", 2, 1)
}).setCriteria(/^You only have \d+ [\w ]+ left in your Quiver!$/)
