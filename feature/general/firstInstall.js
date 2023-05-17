import * as helperFunction from "../../helperFunctions.js";

register("step", () => {
  if (!helperFunction.data.firstTimeMsg) return;
  helperFunction.ShowFirstLoginMessage();
}).setFps(5)
