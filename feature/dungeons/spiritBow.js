import renderBeaconBeam from "../../../BeaconBeam";
import Settings from "../../settings";
const config = Settings

let bows = [];

register("renderWorld", () => {
  try {
    bows.forEach(bow => {
      if (config.dungeonsSpiritBowWaypoint && bow.getName().includes("Spirit Bow")) {
        renderBeaconBeam(bow.getRenderX(), bow.getRenderY(), bow.getRenderZ(), 0, 153, 153, 1, true)
      }
    })
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
})

register("step", () => {
  try {
    if (!config.dungeonsSpiritBowWaypoint) return;
    new Thread(() => bows = World.getAllEntities().filter(e => e.getName().includes("Spirit"))).start();
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
}).setFps(2)
