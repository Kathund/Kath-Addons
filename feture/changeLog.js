import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings

register("step", () => {
  if (!config.generalShowChangeLog) return;
  if (helperFunction.data.updateMessage120) return;
  helperFunction.showUpdateMessage();
}).setFps(5)
