import Settings from "./settings";
const config = Settings

register("command", () => config.openGUI()).setName("kath");
register("command", () => ChatLib.say('§')).setName("limbo");

register("chat", function (event) {
  const message = (ChatLib.getChatMessage(event)).toString()
  if (message.includes('Illegal characters in chat')) {
    cancel(event)
  }
})
