import * as helperFunction from "../../helperFunctions.js";

register("step", () => {
  if (helperFunction.data.firstTimeMsg) helperFunction.ShowFirstLoginMessage();
}).setFps(5)
