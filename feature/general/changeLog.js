import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register("step", () => {
  if (!config.generalShowChangeLog) return;
  if (helperFunction.data.updateMessage1_3_0) return;
  helperFunction.data.updateMessage1_3_0 = true
  helperFunction.data.save();
  helperFunction.viewChangeLog1_3_0();
}).setFps(5)
