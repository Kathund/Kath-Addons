import * as helperFunction from "../../helperFunctions.js";

register("step", () => {
  if (helperFunction.data.firstTimeMsg === true) return;
  helperFunction.ShowFirstLoginMessage();
}).setFps(5)
