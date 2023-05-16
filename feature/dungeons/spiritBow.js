import renderBeaconBeam from "../../../BeaconBeam";
import Settings from "../../settings";
const config = Settings
let bows = [];

register("renderWorld", () => {
  bows.forEach(bow => {
    if (config.dungeonsSpiritBowWaypoint && bow.getName().includes("Spirit Bow")) {
      renderBeaconBeam(bow.getRenderX(), bow.getRenderY(), bow.getRenderZ(), 0, 153, 153, 1, true)
    }
  })
})

register("step", () => {
  if (!config.dungeonsSpiritBowWaypoint) return;
  new Thread(() => bows = World.getAllEntities().filter(e => e.getName().includes("Spirit"))).start();
}).setFps(2)
