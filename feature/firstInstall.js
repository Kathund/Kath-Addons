import * as helperFunction from "../helperFunctions.js";

let checked = false;
register("step", () => {
  if (checked) return;
  checked = true;
  if (!helperFunction.data.firstTimeMsg) return;
  helperFunction.data.firstTimeMsg = false;
  helperFunction.data.save();
  helperFunction.ShowFirstLoginMessage();
}).setFps(5)
