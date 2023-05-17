import * as helperFunction from "../helperFunctions.js";

// GUI
register("command", () => config.openGUI()).setName("kath");

// Limbo
register("command", () => ChatLib.say('§')).setName("limbo");

// Discord commands

// off
register("command", () => {
  helperFunction.data.discordWarningMessage = false
  helperFunction.data.save();
  ChatLib.chat(`&2[&dKath&2] Turned off discord warning message`)
}).setName("discordwarningoff");

// on
register("command", () => {
  helperFunction.data.discordWarningMessage = true
  helperFunction.data.save();
  ChatLib.chat(`&2[&dKath&2] Turned on the discord warning message`)
}).setName("discordwarningon");
