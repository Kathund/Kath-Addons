import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings


// GUI
register("command", () => config.openGUI()).setName("kath");

// Limbo
register("command", () => ChatLib.say('§')).setName("limbo");

// Discord commands

// off
register("command", () => {
  helperFunction.data.discordWarningMessage = false
  helperFunction.data.save();
  ChatLib.chat(`&2[&dKath&2] &7Turned&l&c off&r&7 discord warning message`)
}).setName("discordwarningoff");

// on
register("command", () => {
  helperFunction.data.discordWarningMessage = true
  helperFunction.data.save();
  ChatLib.chat(`&2[&dKath&2] &7Turned&l&a on&r&7 the discord warning message`)
}).setName("discordwarningon");
