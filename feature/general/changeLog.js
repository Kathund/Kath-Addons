import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register("step", () => {
  if (!config.generalShowChangeLog) return;
  if (helperFunction.data.updateMessage1_3_1) return;
  helperFunction.data.updateMessage1_3_1 = true
  helperFunction.data.save();
  helperFunction.viewChangeLog1_3_1();
}).setFps(5)
