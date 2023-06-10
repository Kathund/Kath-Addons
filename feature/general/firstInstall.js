import * as helperFunction from "../../helperFunctions.js";

register("step", () => {
  try {
    if (helperFunction.data.firstTimeMsg === true) return;
    helperFunction.ShowFirstLoginMessage();
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setFps(5)
