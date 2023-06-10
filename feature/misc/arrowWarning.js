import Settings from "../../settings";
const config = Settings

register("chat", () => {
  try {
    if (!config.miscArrowWarning) return
    Client.showTitle("&cLow Arrows!", "", 1, 30, 1)
    if (config.generalAlertSound) World.playSound("random.orb", 2, 1)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setCriteria(/^You only have \d+ [\w ]+ left in your Quiver!$/)
