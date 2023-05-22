import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register("step", () => {
  try {
    if (!config.generalShowChangeLog) return;
    if (helperFunction.data.updateMessage1_3_1) return;
    helperFunction.data.updateMessage1_4_0 = true
    helperFunction.data.save();
    helperFunction.viewChangeLog1_4_0();
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
}).setFps(5)
