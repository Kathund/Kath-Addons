import Settings from "../../settings";
const config = Settings

register("chat", (player) => {
  if (!config.partyFragBot) return
  ChatLib.command(`p accept ${player}`)
  setTimeout(() => ChatLib.command(`p leave`), 5000)
}).setCriteria(/^(?:\[[^\]]+\] )(\w+) has invited you to join their party!/)
