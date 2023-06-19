import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings.js";
const config = Settings

register("chat", (event) => {
  // if (!config.emojisToggle) return;
  const message = ChatLib.getChatMessage(event, false)
  const match = message.match(/:\w+:/g)
  if (!match) return
  cancel(event)
  ChatLib.chat(`${helperFunction.emojis(ChatLib.getChatMessage(event))}`)
})