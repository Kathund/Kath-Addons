import Settings from "../../settings";
const config = Settings

register("chat", (player) => {
  if (config.partyAccept) ChatLib.command(`p accept ${player}`)
}).setCriteria(/^(?:\[[^\]]+\] )(\w+) has invited you to join their party!/)