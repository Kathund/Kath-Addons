import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings

register("step", () => {
  if (!config.generalShowChangeLog) return;
  if (helperFunction.data.updateMessage1_2_0) return;
  helperFunction.data.updateMessage1_2_0 = true
  helperFunction.data.save();
  helperFunction.viewChangeLog1_2_0();
}).setFps(5)
